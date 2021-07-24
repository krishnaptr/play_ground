const colors = require('tailwindcss/colors')
module.exports = {
  purge: [
    './src/**/*.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        orange: colors.orange,
        teal: colors.teal,
        'crimson': {
          '50': '#fbf3f3', 
          '100': '#f8e7e7', 
          '200': '#edc3c2', 
          '300': '#e39f9d', 
          '400': '#cd5754', 
          '500': '#b80f0a', 
          '600': '#a60e09', 
          '700': '#8a0b08', 
          '800': '#6e0906', 
          '900': '#5a0705',
        },
      },
      fontFamily: {
        Poppins: ['Poppins', 'sans-serif']
      },
      
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
