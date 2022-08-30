/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        first: "#79B4B7",
        second: "#FEFBF3",
        third: "#F8F0DF",
        fourth: "#9D9D9D",
      },
      fontFamily: {
        lato: ["Lato"],
      },
    },
  },
  plugins: [],
};
