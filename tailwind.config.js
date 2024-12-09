/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-desktop': "url('assets/images/bg-main-desktop.png')",
        'hero-mobile': "url('assets/images/bg-main-mobile.png')",
        'hero-card-front': "url('assets/images/bg-card-front.png')",
        'hero-card-back': "url('assets/images/bg-card-back.png')",
      },
      fontSize: {
        xxs: '0.65rem',
      },
    },
  },
  plugins: [],
};
