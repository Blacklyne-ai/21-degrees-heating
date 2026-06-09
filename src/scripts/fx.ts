import Lenis from 'lenis';

const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* Subscribe a callback to scroll — via Lenis if active, else the window. */
function onScrollSub(cb: () => void) {
  if (lenis) lenis.on('scroll', cb);
  else window.addEventListener('scroll', cb, { passive: true });
}

/* ── Smooth scroll (Lenis) ───────────────────────────────── */
let lenis: Lenis | null = null;
if (!reduce) {
  lenis = new Lenis({ duration: 1.1, smoothWheel: true, wheelMultiplier: 1, touchMultiplier: 1.6 });
  const raf = (t: number) => { lenis!.raf(t); requestAnimationFrame(raf); };
  requestAnimationFrame(raf);
  // in-page anchor links route through Lenis
  document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href')!;
      if (id.length > 1) { const el = document.querySelector(id); if (el) { e.preventDefault(); lenis!.scrollTo(el as HTMLElement, { offset: -80 }); } }
    });
  });
}

/* ── Scroll progress bar ─────────────────────────────────── */
const bar = document.getElementById('scroll-progress');
if (bar) {
  const update = () => {
    const h = document.documentElement;
    const p = h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight);
    bar.style.transform = `scaleX(${p})`;
  };
  update();
  onScrollSub(update);
}

/* ── Reveal-on-scroll with stagger ───────────────────────── */
const reveals = document.querySelectorAll<HTMLElement>('.reveal');
if (reveals.length) {
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (e.isIntersecting) {
        const el = e.target as HTMLElement;
        // auto-stagger siblings inside a [data-stagger] group
        const group = el.closest('[data-stagger]');
        if (group && !el.style.getPropertyValue('--d')) {
          const sibs = Array.from(group.querySelectorAll('.reveal'));
          el.style.setProperty('--d', `${Math.min(sibs.indexOf(el), 8) * 80}ms`);
        }
        el.classList.add('in');
        io.unobserve(el);
      }
    }
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
  reveals.forEach((el) => io.observe(el));
}

/* ── Count-up numbers ────────────────────────────────────── */
const counters = document.querySelectorAll<HTMLElement>('[data-count]');
if (counters.length && !reduce) {
  const fmt = (n: number, suffix: string, prefix: string) => `${prefix}${n.toLocaleString('en-GB')}${suffix}`;
  const run = (el: HTMLElement) => {
    const target = parseFloat(el.dataset.count!);
    const suffix = el.dataset.suffix ?? '';
    const prefix = el.dataset.prefix ?? '';
    const dur = 1400; const t0 = performance.now();
    const step = (t: number) => {
      const k = Math.min(1, (t - t0) / dur);
      const eased = 1 - Math.pow(1 - k, 3);
      el.textContent = fmt(Math.round(target * eased), suffix, prefix);
      if (k < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) if (e.isIntersecting) { run(e.target as HTMLElement); io.unobserve(e.target); }
  }, { threshold: 0.5 });
  counters.forEach((el) => io.observe(el));
}

/* ── Magnetic buttons ────────────────────────────────────── */
if (!reduce && window.matchMedia('(pointer: fine)').matches) {
  document.querySelectorAll<HTMLElement>('[data-magnetic]').forEach((el) => {
    const strength = 0.32;
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width / 2) * strength;
      const y = (e.clientY - r.top - r.height / 2) * strength;
      el.style.transform = `translate(${x}px, ${y}px)`;
    });
    el.addEventListener('pointerleave', () => { el.style.transform = ''; });
  });
}

/* ── Hero parallax (background drifts slower than scroll) ─── */
if (!reduce) {
  const layers = document.querySelectorAll<HTMLElement>('[data-parallax]');
  if (layers.length) {
    const onScroll = () => {
      const y = window.scrollY;
      layers.forEach((l) => {
        const speed = parseFloat(l.dataset.parallax || '0.2');
        l.style.transform = `translate3d(0, ${y * speed}px, 0)`;
      });
    };
    onScroll();
    onScrollSub(onScroll);
  }
}
