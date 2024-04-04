/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "dark-1": "#000",
        "dark-2": "#333",
        "dark-3": "#1E1E1E",
        "green-1": "#D7FC70",
      },
    },
  },
  plugins: [],
};
