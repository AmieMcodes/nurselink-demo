/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bcbs: {
          light: "#E8F2FF",
          blue: "#0072CE",
          dark: "#00338D",
          gray: "#F5F7FA",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["DM Sans", "Inter", "sans-serif"],
      },
      boxShadow: {
        subtle: "0 2px 6px rgba(0, 51, 141, 0.08)",
      },
    },
  },
  plugins: [],
};

