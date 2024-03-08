module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  plugins: [
    // ...

    require("@heroicons/react/20/solid"),
    require("@headlessui/react"),
  ],
  theme: {
    fontFamily: {
      lato: ["Lato", "sans-serif"],
      quicksand: ["Quicksand", "sans-serif"],
      yesevaOne: ["Yeseva One", "sans-serif"],
    },
    extend: {
      fontSize: {
        80: "80px",
        30: "30px",
        36: "36px",
      },
      lineHeight: {
        69: "69px",
        40: "40px",
      },
      letterSpacing: {
        normal: "0em",
      },
      textAlign: {
        left: "left",
      },
      fontWeight: {
        normal: 400,
        light: 100,
      },
      colors: {
        brown: "#EFEBE0",
        oceanH1: "#002955",
        turquoise: "#00E0F0",
        oceanH2: "#01385FB2",
        camel: "#F6F4EE",
        camellight: "var(--LIGHT-CAMEL, #F6F4EE)",
        dark: "#002955",
        "green-blue": "#09929D",
        darkBlue: "#4B708A",
        turquoise: "#1A929D",
        turquoisefonce: "#077A83",
        grey: "rgba(1, 56, 95, 0.70)",
      },
      backgroundImage: {
        background_description: "url('/src/medias/background_description.svg')",
        background_opinion: "url('/src/medias/background_opinion.svg')",
        background_picture_form:
          "url('/src/medias/background_picture_form.png')",
        background_contactMe: "url('/src/medias/bg_contact_section.svg')",
        background_step: "url('/src/medias/forms_bg.svg')",
        background_finishQuizz: "url('/src/medias/bg_finishquizz.svg')",
        meeting: "url('/src/medias/background_meeting.svg')",
      },
    },
  },
  plugins: [],
};
