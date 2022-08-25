/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#A61B1B",
        secondary: "#BF4E4E",
        accent: "#EDEDED",
        bg: "#CDCDCD",
        dark: "#262626",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
