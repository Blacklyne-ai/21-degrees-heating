# CONCEPT — 21 Degrees Heating Ltd

A bespoke B2B engineering-authority website. Not a template. Every decision below is
made for *this* contractor — 22 years, £10M+ named portfolio, Tower Bridge, NHS, City
of London estates — and is justifiable on its own terms.

---

## ARCHETYPE

**Name: "The Commissioning Engineer."**

Refines the working reference "B2B Engineering Authority". The register isn't generic
corporate-authority — it's the specific voice of the person who signs off a plantroom
*set to work*. Calm, exact, evidence-led. The whole site behaves like a commissioning
certificate: every claim carries a number, a value, a location, a method.

**Why it fits:** The buyer is a procurement professional in a pre-qualification round —
estate manager, NHS estates lead, housing association property director, main-contractor
M&E lead. They shop on competence, not warmth. They will cross-check Companies House.
They want a capability statement PDF and £1M+ project evidence. The Commissioning
Engineer archetype answers that buyer with proof, not persuasion. Register calibrated to
**Cundall / Hoare Lea** editorial sobriety, carrying the **Blacklyne DNA** structurally —
not Jack's Garage folksiness, not AECOM corporate sterility.

---

## COLOUR RATIONALE

One saturated brand colour + warm surface + dark anchor. Three roles, not five colours.

> **Revision (client direction, Luise):** the accent is the **real brand teal `#00769E`**,
> sampled directly from the client's registered logo, NOT an invented copper. This honours
> the standing rule to match the real brand rather than invent a palette. The earlier copper
> exploration was dropped; teal now drives every accent so the UI and the logo are unified.

| Token | Hex | Role / rationale |
|---|---|---|
| **Slate ink** | `#1C2A33` | Primary dark surface + display text. Deep desaturated petrol-slate — the colour of cast-iron plant, painted steelwork, engineering drawings. Reads as gravitas without the cliché of corporate navy. |
| **Bone** | `#F4EFE6` | Warm off-white surface. Never pure `#FFF`. Warm paper tone keeps an engineering site from going clinical/sterile; ties to the cream in the Blacklyne demo siblings. |
| **Brand teal** | `#00769E` | THE accent — sampled from the client's own logo. Teal-azure reads as engineering/precision and ties every accent to the brand mark: eyebrows, key figures, CTAs, map, Thames ribbon, rules. Shades: `#015F7F` (hover), `#3A9CC0` (on-dark text). |
| **Steel** | `#6B7B85` | Neutral mid for secondary text/borders. Derived from slate, not a new hue. |

- **Why NOT generic red/orange heating cliché:** every boiler/HVAC contractor in Britain
  uses flame-orange or thermostat-red. It signals consumer-tier and screams "trades business".
- **Why NOT generic corporate navy:** navy is the default of every facilities-management
  and M&E giant (Mitie, Imtech). Slate-petrol is warmer and more specific.
- **Teal as the single accent:** matches the registered logo exactly, so the brand mark
  never looks orphaned on the page. Used surgically — a 1px rule, an eyebrow, a figure,
  the glowing map river — never as a flat fill across hero panels.

Dark-mode-ready: the slate surface *is* effectively a dark theme; sections alternate
bone ↔ slate so the page already proves it works in both registers.

---

## TYPOGRAPHY RATIONALE

A two-typeface system with a clear gravitas/precision split.

- **Display — Fraunces (variable, optical size high, weights 340–600).**
  A modern "old-style" serif with engineered detailing and a true optical-size axis.
  Set tight (`-0.025em`, line-height 1.0–1.1) at `text-7xl`–`text-8xl` it reads as an
  engineering authority presenting a portfolio — editorial, not decorative. Chosen for
  its *precision* feel; the optical axis lets headlines stay sharp at display size.
  Bold/Regular weight-mix within a single same-colour H1 is the Blacklyne hero grammar.
- **Body / UI / data — Inter (variable).**
  Maximum legibility for procurement professionals scanning technical specs, project
  values, accreditation names during pre-qualification. Tabular figures (`font-variant-
  numeric: tabular-nums`) on every £ value, kW/MW figure and stat — numbers must align
  like a schedule of works.
- **Why NOT Fraunces-as-default-only (PhysioLogix):** there it carried the *whole* voice;
  here it is paired against Inter and pushed into a sober optical register, not the soft
  display setting. Different job.
- **Why NOT Editorial New Italic (PhysioLogix v2):** italic editorial display is intimate
  and fashion-adjacent — wrong for a contractor a council shortlists on competence.
- Both self-hosted via `@fontsource-variable` → no third-party requests, Lighthouse-safe,
  GDPR-clean (no Google Fonts call).

---

## HERO CONCEPT

**Composition:** Full-bleed Tower Bridge plantroom photograph (the red-oxide pipework
against Victorian brick — their single most credibility-loading asset), slate-graded with
a warm scrim left→right so the type sits on the dark side. Over it:

- Eyebrow (caps + pipe separator): `COMMERCIAL M&E HEATING · LONDON & THE HOME COUNTIES`
- H1, bold/regular mix in one colour (bone):
  **"Heating infrastructure** engineered, fabricated and commissioned in-house **since 2004."**
- Factual subline: *"£10M+ of delivered plant — from Tower Bridge to NHS trusts and City
  of London estates. Design, in-house pipe fabrication, installation and 24/7 temporary
  boiler cover from our Battersea works."*
- Two CTAs side-by-side: **Download capability statement** (primary, copper) · **Discuss a
  project** (ghost).
- Bottom-left credit chip: `TOWER BRIDGE · 2 NEW BOILER ROOMS · £800,000`.

**Why this serves the buyer:** the first thing a procurement reader sees is a real £800k
heritage plantroom they delivered — not a stock boiler, not a smiling engineer. It
front-loads proof and scale, and the Tower Bridge name does the qualifying instantly.

---

## SECTION ORDER (home)

Ordered as a tender-qualification reading path: *prove scale → prove breadth → prove
range → prove you're safe to appoint → make it easy to act.*

1. **Sticky header** — logo · nav · phone · Capability Statement CTA · Emergency hire CTA.
2. **Hero** — Tower Bridge + value proposition (above).
3. **Stat band** (directly under hero, light, NOT a dark counter): `Since 2004 · £10M+
   delivered · 12 accreditations · 20+ in-house staff`.
4. **Trust-badge strip** — 12 real accreditations. A council reader checks this *first*.
5. **WOW — Interactive London project map.** 10 named projects pinned across London;
   hover/tap reveals name + value + sector + scope; filter by sector. No UK M&E
   competitor presents their portfolio geographically. This *is* the differentiator.
6. **Six sectors** ("Six sectors we serve") — numbered cards, the critical B2B navigation.
7. **Featured case studies bento** ("Ten named projects") — Tower Bridge / Kingston Hill /
   Aylesbury, with photo, value, scope, link.
8. **Four good reasons** — in-house design · in-house pipe fabrication · own boiler fleet ·
   22 years. REAL differentiators, not virtues.
9. **Nine in-house services** — numbered cards.
10. **Emergency boiler hire** — separate channel, high-margin, currently invisible on the
    old site. Distinct copper CTA band.
11. **Renewables / energy transition** — MCS-certified, Dartford + Orchard gas-free
    conversions; positions them for Heat Network Zoning + Future Buildings Standard.
12. **About preview** — Jonathan Mark Smith, 22 years, 20+ staff, Battersea works.
13. **Sector marquee** (◆ separator).
14. **Capability statement CTA band.**
15. **Contact** — phone/email/two addresses + Maps embed + B2B enquiry form.
16. **Closing CTA** before footer.
17. **Footer** — company no. 05140422, VAT (PH), both addresses, 12-badge strip, nav, legal.

**Why this path:** a procurement reader doesn't convert on warmth — they de-risk. Proof
(stats, badges, map, projects) comes *before* services, because the question they're
answering isn't "what do you do" but "can I defend appointing you in a tender report."

---

## WOW FACTOR

- **What:** Interactive London project map. SVG/vanilla-JS island, ~10 pins on a stylised
  London map (Thames as a copper ribbon). Hover/tap → card with project name, £ value,
  sector tag, one-line scope, link to the case study. Sector filter buttons re-highlight
  pins. Keyboard-navigable, `prefers-reduced-motion` respected, fully responsive (list
  fallback under 640px).
- **Why this business:** their entire credibility is *named London projects at £1M+ scale*.
  Showing them geographically turns a text wall into a defensible portfolio a buyer can
  scan in five seconds — and proves local density (Southwark, City of London, Kingston).
- **Implementation:** Astro island, `client:visible`, vanilla JS (no map library, no API
  key, no external tiles → Lighthouse-safe, GDPR-clean). Pins are absolutely-positioned
  buttons over an inline SVG of Greater London with approximate real positions.

---

## COPY VOICE

Sober, editorial, engineering-authoritative. Confident specificity over adjectives.

Example phrases that show the voice:
- *"Three 1.5MW boilers — 4.5MW of heat from a single energy centre, feeding nine
  satellite plant rooms across the Aylesbury Estate."*
- *"We run our own pipe fabrication and design in-house — clients get certainty on
  delivery that subcontracted chains can't promise."*
- *"Temporary boiler plants from 100kW to 2MW, on our own fleet, for emergency heat and
  hot water cover."*

What this voice would NOT say:
- "Trusted by London!" (vague) · "Quality service guaranteed" (empty) · "We're the best!"
  (comparative puff) · "Let us heat your home!" (consumer-tier, wrong audience) ·
  anything folksy-craftsman · anything tech-startup ("game-changing M&E!").

---

## ASSET HARVEST PROOF

- **Existing logo:** the client's **real registered logo is used** (client direction). The
  144×48 raster only existed in surface-specific versions, so it was cleaned into a single
  transparent PNG (`public/logo.png`) — backgrounds keyed out with Pillow, brand teal
  `#00769E` sampled from it — that reads on both the dark hero/footer and the light bone
  surfaces. Displayed at ≤36px so the low source resolution renders crisply. A higher-res
  vector from the client would let it scale further.
- **Tower Bridge photos (7):** hero feature + Tower Bridge case study gallery. The single
  most valuable asset — used heavily, as instructed.
- **Kingston Hill photos (7):** Kingston Hill case study gallery + map/portfolio thumbs.
- **St Martins photos (5):** NHS case study gallery.
- **Middlesex/York Way photos (7):** that case study gallery + social-housing sector page.
- **Renewables photos (4):** /services/heat-pumps + renewables home section + ASHP studies.
- **All 12 accreditation badges:** credentials band with full professional names + verify
  links. Re-rendered on bone tiles for visual consistency.
- **Existing copy:** all project narratives + company narrative + renewables narrative
  lifted **verbatim** (see `_harvest/HARVESTED-COPY.md`) and reorganised into proper case
  studies. British English preserved/corrected ("metre", "1.5 megawatts").
- **Director Jonathan Mark Smith:** named on About with B2B gravitas (founder/owner, since
  2004), not personality-led intimacy.

---

## B2B-SPECIFIC CHECKS
- [x] Capability Statement PDF download featured (header + hero + 3 band locations) — placeholder PDF until client supplies real one
- [x] Companies House 05140422 in footer
- [x] All 12 accreditations with full names + verify links
- [x] Six-sector taxonomy navigable (hub + 6 pages)
- [x] Project values in £ on every case study
- [x] Sector tags on every case study + service
- [x] Founder named with B2B gravitas
- [x] Emergency boiler hire as distinct prominent channel
- [x] Tender enquiry form: organisation, role, project type, sector, estimated value, timeline, message
- [x] Registered office (Harrow) AND trading address (Battersea) both shown

## BLACKLYNE DNA CHECK
- [x] Hero: eyebrow + H1 bold/regular mix (same colour) + factual subline + 2 CTAs
- [x] Stat band directly under hero (light, not a dark counter)
- [x] Trust-badge strip with 12 real accreditations
- [x] Numbered section headings ("Six sectors", "Ten named projects", "Twelve accreditations")
- [x] Service/sector cards with number + category tag (no Lucide-default)
- [x] ◆ marquee (sectors · services · London neighbourhoods)
- [x] "Four good reasons" with real differentiators
- [x] Contact with › bullets + Maps + location H2
- [x] Closing CTA before footer
- [x] ONE brand colour (oxide copper) + warm/dark surfaces
- [x] Business-specific wow factor (interactive London project map)
- [x] Engineering-authority register (not folksy, not tech-startup, not sterile-corporate)
