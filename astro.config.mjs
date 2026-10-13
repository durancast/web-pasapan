// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
	site: 'https://restaurantepasapan.es',
	trailingSlash: 'ignore',
	output: 'static',
	adapter: cloudflare(),
	redirects: {
		'/carta-pasapan': '/carta',
		'/carta-veggie': '/carta',
		'/carta-sin-gluten': '/carta',
		'/restaurant-menu': '/carta',
		'/aviso-legal-y-terminos-de-uso-de-la-web': '/aviso-legal',
		'/politica-de-privacidad': '/privacidad',
		'/politica-de-cookies': '/cookies',
	},
	integrations: [
		sitemap({
			filter: (page) => !page.includes('/es/'),
		}),
	],
	vite: {
		plugins: [tailwindcss()],
	},
});