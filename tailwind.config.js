/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors: {
        mercury: "#E4E4E4",
        "pickled-bluewood": "#34495E",
        thunder: "#2a292a",
        primary: "#66332B",
        "mercury-dark":"#E5E5E5"
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
