/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",

  ],
  theme: {
    extend: {
      borderColor :{
        'primary ' : 'rgb(138, 138, 201)',
        'secondary ' : 'rgb(188, 115, 63)'
         
      }
    },
    fontFamily : {
      'hero-font' : 'Srirach'
    }
  },
  plugins: [],
}

