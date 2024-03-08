module.exports = {
  theme: {
    fontFamily: {
	sans: ['Noto Sans SC', 'sans-serif'],
	serif: ['Noto Serif','serif'],
    },
    colors: {
	dark: '#333333',
	light: '#FFFFFF',
	gray: '#F5F5F5',
    },
  },
  content: ['./src/**/*.html'],
    plugins: [
	require("daisyui"),
	require("@tailwindcss/forms"),
    ]
}
