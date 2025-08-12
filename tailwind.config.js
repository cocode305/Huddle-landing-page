/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        mobile: "url('../images/bg-mobile.svg')",
        desktop: "url('../images/bg-desktop.svg')",
      },
    },
  },
  plugins: [],
};
