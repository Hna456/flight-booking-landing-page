/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        Blue: '#2596be',
        darkBlue: '#334c99',
        darkerBlue: '#0f172a',
        lightBlue: '#64748b',
        whiteShade: '#f1f5f9'
      },
      fontFamily: {
        'Poppins': ['Poppins', 'sans-serif']
      },
      keyframes: {
        'movable': {
          '0%': { transform: 'translate(-11px, 0)' },
          '50%': { transform: 'translate(0, -11px)' },
          '100%': { transform: 'translate(-11px, 0)' },
        }
      },
      animation: {
        'movable': 'movable  2s linear infinite '
      }
    },
  },
  plugins: [],
}

