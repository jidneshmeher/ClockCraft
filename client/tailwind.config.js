/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'inter': ["Inter", 'sans-serif'],
      },
      height: {
        'calc-100vh-minus-68px': 'calc(100vh - 68px)',
      },
    },
  },
  plugins: [],
}

