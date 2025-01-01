const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './src/**/*.{html,js}', // Caminho para seus arquivos HTML/JS
  ],
  theme: {
    extend: {
      colors: {
        'new-blue': '#243C5A',
        gray: {
          ...colors.gray,
          '900': '#999'
        }
      },
      spacing: {
        '50': '20rem',
      }
    },
  },
  plugins: [],
}
