const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    colors: {
      dark: '#333333',
      light: '#FFFFFF',
    },
    fontFamily: {
      sans: [
        'Roboto Condensed Variable',
        ...defaultTheme.fontFamily.sans,
      ]
    }
  },
  content: ['./src/**/*.html'],
  plugins: [require("daisyui")]
}