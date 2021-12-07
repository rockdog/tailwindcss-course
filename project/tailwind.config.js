module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: ['./dist/**/*.html'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    debugScreens: {
      position: ['top', 'right'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    // require('tailwindcss-debug-screens'),
  ],
}
