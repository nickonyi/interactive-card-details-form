/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-desktop': "url('assets/images/bg-main-desktop.png')",
        'hero-mobile': "url('assets/images/bg-main-mobile.png')",
      },
    },
  },
  plugins: [],
};
