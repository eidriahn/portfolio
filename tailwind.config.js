/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Sora Variable", "sans-serif"]
      }
    }
  },
  plugins: []
};

