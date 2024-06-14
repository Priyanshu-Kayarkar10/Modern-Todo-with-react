import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins"],
        SpaceGrotesk: ["Space Grotesk"],
      },
      backgroundColor: {
        n1: "#151515",
      },
      keyframes: {
        blow: {
          "0%": { transform: " translate(0px,0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
        gradient: {
          to: { "background-position": "200% center" },
        },
      },
      animation: {
        blow: "blow 7s ease-in infinite",
        gradient: "gradient 8s linear infinite",
      },
    },
  },
  plugins: [],
};
