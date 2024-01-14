/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        navDark: "rgba(43, 43, 41, 1)",
        navBrown: "#B18E72",
      },
    },
  },
  plugins: [],
};
