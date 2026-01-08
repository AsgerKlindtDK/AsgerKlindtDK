/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#13c8ec",
        "background-light": "#f6f8f8",
        "background-dark": "#101f22",
        "dark-accent": "#1a2e33",
      },
    },
  },
  plugins: [],
}
