/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				'purple-pipe': '#cb77ff',
				'background': '#16183e'
			}
		},
	},
	plugins: [],
}
