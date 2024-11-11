/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      // colors: {
      //   // travels: {
      //   //   // Azul principal - Para cielos, agua, elementos principales
      //   //   primary: '#1B4965',    // text-travels-primary
          
      //   //   // Verde aventura - Para naturaleza, botones de acción
      //   //   accent: '#4C956C',     // text-travels-accent
          
      //   //   // Arena clara - Para fondos
      //   //   sand: '#FFECD1',       // bg-travels-sand
          
      //   //   // Naranja sunset - Para llamadas a la acción (CTA)
      //   //   sunset: '#FF7D00',     // text-travels-sunset
          
      //   //   // Azul cielo - Para elementos secundarios
      //   //   sky: '#78C6F7',        // text-travels-sky
          
      //   //   // Gris suave - Para textos y elementos neutrales
      //   //   neutral: '#2C3E50'     // text-travels-neutral
      //   // }
      // },
      backgroundImage: {
        'bali': "url('../img/bali.jpg')",
        'chicago': "url('../img/chicago.jpg')",
        'europe': "url('../img/europe.jpg')",
        'iceland': "url('../img/iceland.jpg')",
        'LA': "url('../img/LA.jpg')",
        'miami': "url('../img/miami.jpg')",
        'new_york': "url('../img/new_york.jpg')",
        'norway': "url('../img/norway.jpg')",
        'sanFrancisco': "url('../img/sanFrancisco.jpg')",
        'sanFranciscoDesktop': "url('../img/sanFranciscoDesktop.jpg')",
        'seattle': "url('../img/seattle.jpg')",
        'switzerland': "url('../img/switzerland.jpg')",
        'sydney': "url('../img/sydney.jpg')",
        'tosemite': "url('../img/yosemite.jpg')",
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

