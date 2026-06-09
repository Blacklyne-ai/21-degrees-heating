import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://21-degrees-heating.pages.dev',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  vite: {
    // cast: @tailwindcss/vite peer Vite version skews against Astro's bundled Vite types
    plugins: [/** @type {any} */ (tailwindcss())],
  },
});
