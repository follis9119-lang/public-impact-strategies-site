/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0D1B2A",
        teal: "#007A8C",
        orange: "#FF6B1A",
        cream: "#F5F3EE"
      },
    },
  },
  plugins: [],
};
