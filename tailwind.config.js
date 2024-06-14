import defaultTheme from "tailwindcss/defaultTheme"


/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        press: ` 'Press Start 2P' `,
        inter: [` 'Inter' `,...defaultTheme.fontFamily.sans],
      },
      backgroundColor: {
        n1: "#151515",
      },
    },
  },
  plugins: [],
};
