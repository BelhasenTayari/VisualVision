/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        oswald: ["Oswald", "sans-serif"],
      },
      colors: {
        deep: {
          300: "#3CA6A6",
          500: "#026773",
          700: "#024959",
          900: "#012E40",
        },
        teal: "#F2E3D5",
      },
    },
  },
  plugins: [],
};
