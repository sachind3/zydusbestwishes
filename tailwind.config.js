/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        theme_blue: {
          50: "#E4FAFB",
          100: "#C5F4F7",
          200: "#90EAEF",
          300: "#56DFE6",
          400: "#21D5DE",
          500: "#189EA4",
          600: "#148085",
          700: "#0E5E62",
          800: "#0A4043",
          900: "#051E1F",
        },
        theme_pink: {
          50: "#F7EDF5",
          100: "#EFDCEB",
          200: "#E1BCD9",
          300: "#D199C5",
          400: "#C276B1",
          500: "#B3559F",
          600: "#90417F",
          700: "#6D3160",
          800: "#4A2141",
          900: "#23101F",
        },
      },
    },
  },
  plugins: [],
};
