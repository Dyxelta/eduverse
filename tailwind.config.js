/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#3498db',
        'primary-dark': '#1f6aaf',
        'secondary': '#95a5a6',
        'secondary-dark': '#677879',
        'black-bg': '#333333',
        'accent' : '#e67e22',
        'offwhite': '#fdfdfd',
        'graywhite': '#f0f0f0',

      },

      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      }
    },
    screens: {
      'tablet': {'max': '940px'},

    },
  },
  plugins: [],
}

