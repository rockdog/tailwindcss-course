var devPlugins = [];

if (process.env.NODE_ENV !== 'production') {
  devPlugins.push(require('tailwindcss-debug-screens'));
}

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
  plugins: devPlugins,
}
