/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      xs: "320px",
      sm: "375px",
      lsm: "425px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        peach: "#E7816B",
        black: "#1D1C1E",
        white: "#FFFFFF",
        "light-peach": "#FFAD9B",
        "dark-grey": "#333136",
        "light-grey": "#F1F3F5",
      },
      fontFamily: {
        primary: ["Jost", "sans-serif"],
      },
    },
  },
  plugins: [],
};
