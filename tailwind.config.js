import { fontFamily } from "tailwindcss/defaultTheme";

module.exports = {
  //...
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
