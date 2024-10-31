/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      maxWidth: {
        "w-430": "430px",
        "w-1207": "1207px",
        "w-1235": "1235px",
        "w-1280": "1280px",
        "w-1315": "1315px",
        "w-1390": "1390px",
      },
      width: {
        w300: "300px",
        26: "26%",
        45: "45%",
        70: "70%",
      },
      height: {
        h300: "300px",
      },
      padding: {
        30: "30px",
        50: "50px",
        "60px": "60px",
        70: "70px",
        100: "100px",
        120: "120px",
      },
      margin: {
        30: "30px",
        50: "50px",
        60: "60px",
        70: "70px",
      },
      boxShadow: {
        custom: "rgba(149, 157, 165, 0.2) 0px 8px 24px;",
      },
      backgroundColor: {
        "pricing-plant": "rgb(237 245 255)",
        popular: "rgb(0 107 255)",
      },
      fontSize: {
        18: "18px",
        22: "22px",
        26: "26px",
        28: "28px",
      },
      colors: {
        waterloo: "rgb(117 118 147)",
        "color-text": "#757693",
        "color-hover": "rgb(0 107 255)",
        "border-color": "rgb(0 107 255/var(--tw-border-opacity))",
      },
      zIndex: {
        1: "1",
      },
      aspectRatio: {
        "scale-img-blog": "368/245",
      },
      letterSpacing: {
        "letter-spacing": "5px",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
