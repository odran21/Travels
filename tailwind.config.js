/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        travels: {
          // Azul principal - Para cielos, agua, elementos principales
          primary: '#1B4965',    // text-travels-primary
          
          // Verde aventura - Para naturaleza, botones de acción
          accent: '#4C956C',     // text-travels-accent
          
          // Arena clara - Para fondos
          sand: '#FFECD1',       // bg-travels-sand
          
          // Naranja sunset - Para llamadas a la acción (CTA)
          sunset: '#FF7D00',     // text-travels-sunset
          
          // Azul cielo - Para elementos secundarios
          sky: '#78C6F7',        // text-travels-sky
          
          // Gris suave - Para textos y elementos neutrales
          neutral: '#2C3E50'     // text-travels-neutral
        }
      }
    },
  },
  plugins: [],
}

