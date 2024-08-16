/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily:{
        babas : ["Bebas Neue","sans-serif"],
        roboto: ["Roboto","sans-serif"]
      },
      colors:{
        "primary-bg": "rgb(229, 229, 229)",
        "banner-bg" :"rgb(255, 251, 240)",
        "banner-text": "rgb(250, 190, 76)",
        "main-text" : "rgb(54, 57, 88)",
        "para-text" : "rgb(62, 62, 62)",
        "shadow-color": "rgba(0, 0, 0, 0.10)",
        "card-bg" : "rgb(241, 241, 241)",
        "gardient-1" :"rgb(164, 188, 70)",
        "gardient-2" : "rgb(133, 160, 25)"
      }
    },
  },
  plugins: [],
}

