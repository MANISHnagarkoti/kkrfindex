/** @type {import('tailwindcss').Config} */
export default {
  content: ["**"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {


      colors: {
        colorOne: "#f8f8f8",
        colorTwo: "#022846",
        colorThree: "#02bab2"

      }



    },
  },
  plugins: [],
}