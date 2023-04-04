/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{tsx,ts,jsx,js,html}'],
  theme: {
    screens: {
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      poppins: ['Poppins', 'sans-serif'],
      monsterat: ['Monsterat', 'sans-serif']
    },
  },
  plugins: [],
}

