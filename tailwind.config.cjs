/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      xs: "440px",
    },
    extend: {
      colors: {
        primary: "#A61B1B",
        secondary: "#BF4E4E",
        accent: "#EDEDED",
        bg: "#CDCDCD",
        dark: "#262626",
        darkMode: "#565656",
      },
      fontFamily: {
        teko: "'teko', 'sans-serif'",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
