import tailwindcssAnimated from "tailwindcss-animated";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  darkMode: "class", // dark mode
  plugins: [tailwindcssAnimated],
};
