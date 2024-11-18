/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'sanFranciscoDesktop': "url('../images/sanFranciscoDesktop.jpg')",
        'bali': "url('../images/bali.jpg')",
        'chicago': "url('../images/chicago.jpg')",
        'europe': "url('../images/europe.jpg')",
        'iceland': "url('../images/iceland.jpg')",
        'LA': "url('../images/LA.jpg')",
        'miami': "url('../images/miami.jpg')",
        'new_york': "url('../images/new_york.jpg')",
        'norway': "url('../images/norway.jpg')",
        'sanFrancisco': "url('../images/sanFrancisco.jpg')",
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

/*Hola se puede personalizar los Breakpoints según tengo entendido
module.exports = {
  theme: {
    screens: {
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
  }
}*/