/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {},
    screens: {
      'sm': '375px',
      'md': '768px',
      'lg': '1024px',
    },
    container: {
      center: true,
    },

    fontFamily: {
      Poppins: ['sans-serif']
    }
  },
  plugins: [],
}

