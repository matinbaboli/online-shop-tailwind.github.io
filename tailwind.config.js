/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/**/*.{html, js}"],
  theme: {
    extend: {
      screens: {
        'wideScreen': {'raw': '(min-aspect-ratio: 3/2)'},
        'tallScreen' : {'raw' : '(max-width: 640px)'}
      },
      keyframes: {
        'open-menu': {
          '0%': { transform: 'scaleY(0)' },
          '80%': { transform: 'scaleY(1.2)' },
          '100%': { transform: 'scaleY(1)' },
        },
      },
      animation: {
        'open-menu': 'open-menu 0.5s ease-in-out forwards',
      }

    },
  },
  plugins: [],
}

