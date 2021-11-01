module.exports = {
  mode: "jit",

  purge: ["./public/**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    maxWidth: {
      "1/4": "25%",
      "1/2": "50%",
      "3/4": "75%",
    },
    backgroundImage: {
      "hero-img": "url('/img/hero.png')",
    },
    extend: {
      colors: {
        gray: {
          dark: "#DEE1E6",
          light: "#EBEDF1",
        },
        blue: {
          dark: "#0051A6",
          light: "#1E91D6",
        },
        black: {
          dark: "#000000",
          light: "#303C42",
        },
      },
      fontFamily: {
        barlow: ['"Barlow"', " sans-serif"],
        lora: ['"Lora"', " serif"],
      },
    },
  },
  // variants: {
  //   extend: {},
  // },
  plugins: [],
};
