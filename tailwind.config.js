const colors = require("tailwindcss/colors");
module.exports = {
  jit: true,
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      barleyWhite: "#FFF2CE",
      black: "#000000",
      crusta: "#fe812e",
      eggWhite: "#ffecc1",
      gigas: "#45419c",
      goldenTainoi: "#FDCC57",
      grandis: "#fed27f",
      grey: "#808080",
      hitPink: "#f9b085",
      lightningYellow: "#fdb717",
      red: "#ff0000",
      soapStone: "#fffdfc",
      treePoppy: "#fd9f19",
      varden: "#fff6db",
      waterloo: "#86829e",
      primary: "#fafafa",
      secondary: "#d6d6d6",
      white: "#ffffff",
      zeus: "#28251e",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
