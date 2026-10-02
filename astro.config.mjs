// @ts-check
import { writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { defineConfig, fontProviders } from 'astro/config';

// 公開ドメインが決まったら設定する。例: https://example.com
const site = process.env.SITE_URL || undefined;

/** @type {import('astro').AstroIntegration} */
const sitemap = {
	name: 'sitemap',
	hooks: {
		'astro:build:done': async ({ dir }) => {
			if (!site) return;
			const loc = site.replace(/\/$/, '');
			const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${loc}/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`;
			await writeFile(fileURLToPath(new URL('sitemap.xml', dir)), xml);
		},
	},
};

export default defineConfig({
	site,
	integrations: [sitemap],
	fonts: [
		{
			provider: fontProviders.google(),
			name: 'Shippori Mincho',
			cssVariable: '--font-mincho',
			weights: [500, 600, 700],
			styles: ['normal'],
			display: 'swap',
			fallbacks: ['Yu Mincho', 'Hiragino Mincho ProN', 'serif'],
		},
		{
			provider: fontProviders.google(),
			name: 'Zen Kaku Gothic New',
			cssVariable: '--font-gothic',
			weights: [400, 500, 700],
			styles: ['normal'],
			display: 'swap',
			fallbacks: ['Yu Gothic', 'Hiragino Sans', 'sans-serif'],
		},
		{
			provider: fontProviders.google(),
			name: 'Outfit',
			cssVariable: '--font-latin',
			weights: [400, 500],
			styles: ['normal'],
			display: 'swap',
			fallbacks: ['Avenir Next', 'sans-serif'],
		},
	],
});
