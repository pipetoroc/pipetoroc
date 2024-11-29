/** @type {import('tailwindcss').Config} */
export default {
	content: ['.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				'primary-color': '#FEFFFE',
				'dark-color': '#0a1128',
				'secondary-color': '#067bc2',
				'accent-color': '#ffa62b',
				'support-color': '#37392a'
			}
		},
	},
	plugins: [],
}
