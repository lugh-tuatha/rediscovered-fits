/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				background: '#F3F3F3',
				primary: '#FC7C5F',
				primary80: 'rgba(252, 124, 95, 0.8)',
			}
		},
	},
	plugins: [],
}
