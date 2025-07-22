/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#6366f1", // Indigo
        secondary: "#a855f7", // Purple
        accent: "#22d3ee", // Cyan
      },
    },
  },
  plugins: [],
};
