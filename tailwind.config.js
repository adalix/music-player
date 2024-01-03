/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blackish': '#232222',
        'darkBlue': '#020024',
        'lightBlue' :'#0d2747',
        'blueish': '#1a577233',
        'textColor': '#dedbdb',
        'barColor': '#12233c'
      }
    },
  },
  plugins: [],
}

