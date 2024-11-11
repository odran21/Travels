/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'bali': "url('../images/bali.jpg')",
        'chicago': "url('../images/chicago.jpg')",
        'europe': "url('../images/europe.jpg')",
        'iceland': "url('../images/iceland.jpg')",
        'LA': "url('../images/LA.jpg')",
        'miami': "url('../images/miami.jpg')",
        'new_york': "url('../images/new_york.jpg')",
        'norway': "url('../images/norway.jpg')",
        'sanFrancisco': "url('../images/sanFrancisco.jpg')",
        'sanFranciscoDesktop': "url('../images/sanFranciscoDesktop.jpg')",
        'seattle': "url('../images/seattle.jpg')",
        'switzerland': "url('../images/switzerland.jpg')",
        'sydney': "url('../images/sydney.jpg')",
        'yosemite': "url('../images/yosemite.jpg')",
        'venezuela': "url('../images/venezuela.avif')"
      }, 
      backgroundColor: theme => ({
        ...theme('colors'),
        'primary': '#CC2D4A',
        'secondary': '#8FA206',
        'terciary': '#61AEC9'
      }),
      textColor: {
        'primary': '#CC2D4A',
        'secondary': '#8FA206',
        'terciary': '#61AEC9'
      },
      fontFamily: {
        Monserrat: ['Monserrat', 'san-serif']
      }
    },
  },
  plugins: [],
}

