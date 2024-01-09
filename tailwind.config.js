/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./scripts/**/*.{js,ts}", "./assets/**/*.json"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Sora Variable", "sans-serif"]
      },
      fontSize: {
        "hero-title": "3rem"
      }
    }
  },
  plugins: []
};

