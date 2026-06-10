/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Bebas Neue"', 'cursive'],
        body: ['"DM Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        ink: '#0a0a0f',
        surface: '#111118',
        card: '#1a1a24',
        border: '#2a2a38',
        accent: '#e8ff47',
        'accent-dim': '#b8cc35',
        muted: '#6b6b80',
        light: '#e8e8f0',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'grain': 'grain 0.5s steps(1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        grain: {
          '0%, 100%': { transform: 'translate(0,0)' },
          '10%': { transform: 'translate(-2%,-3%)' },
          '20%': { transform: 'translate(3%,2%)' },
          '30%': { transform: 'translate(-1%,4%)' },
          '40%': { transform: 'translate(2%,-1%)' },
          '50%': { transform: 'translate(-3%,3%)' },
          '60%': { transform: 'translate(1%,-2%)' },
          '70%': { transform: 'translate(3%,1%)' },
          '80%': { transform: 'translate(-2%,2%)' },
          '90%': { transform: 'translate(2%,-3%)' },
        }
      }
    },
  },
  plugins: [],
}
