/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        // Define aquí tu paleta de colores personalizada
        primary: '#0B132B',
        secondary: '#1C2541',
        accent: '#3A506B',
        neutral: '#5BC0BE',
        base: '#E6E8E6',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
};
