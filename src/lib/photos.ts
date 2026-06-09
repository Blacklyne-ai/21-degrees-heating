import type { ImageMetadata } from 'astro';

// Eagerly import every harvested project photo so Astro optimises them to WebP.
const files = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/photos/*.{jpg,jpeg,png}',
  { eager: true },
);

const byName = new Map<string, ImageMetadata>();
for (const [path, mod] of Object.entries(files)) {
  const name = path.split('/').pop()!.replace(/\.(jpe?g|png)$/i, '');
  byName.set(name, mod.default);
}

/** All photos whose filename starts with `prefix-` (e.g. "tower-bridge"), ordered. */
export function photosFor(prefix: string, limit?: number): ImageMetadata[] {
  const matches = [...byName.entries()]
    .filter(([name]) => name.startsWith(prefix + '-'))
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([, img]) => img);
  return typeof limit === 'number' ? matches.slice(0, limit) : matches;
}

/** A single named photo, e.g. getPhoto('tower-bridge-01'). */
export function getPhoto(name: string): ImageMetadata | undefined {
  return byName.get(name);
}
