import type { Config } from 'tailwindcss';

export default {
  darkMode: 'class',
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['var(--font-cormorant)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 20px 70px rgba(0,0,0,0.08)',
      },
      animation: {
        'float-slow': 'float-slow 20s ease-in-out infinite',
      },
      keyframes: {
        'float-slow': {
          '0%, 100%': { transform: 'translate3d(0,0,0)' },
          '50%': { transform: 'translate3d(0,-6px,0)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
