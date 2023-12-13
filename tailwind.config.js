/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{css,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {fontFamily: {
      whisper: ['Whisper', 'sans-serif'],
    },},
  },
  plugins: [],
}

