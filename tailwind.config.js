/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Baskerville: ["Libre Baskerville", "sans-serif"],
        Franklin: ["Libre Franklin", "sans-serif"],
      },
      colors: {
        body_background: "var(--body_background)",
        body_color: "var(--body_color)",
        link_color: "var(--link_color)",
      },
    },
  },
  plugins: [],
};
