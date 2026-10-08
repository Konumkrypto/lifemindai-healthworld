import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ['class'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef6ff',
          100: '#dbeeff',
          200: '#bfe0ff',
          300: '#8cc5ff',
          400: '#57a6ff',
          500: '#2c89ff',
          600: '#1c75f2',
          700: '#1a5fc1',
          800: '#1e509d',
          900: '#1f447d',
        },
        night: '#08162f',
        panel: '#0d1b38',
        mint: '#32d1a0',
        violet: '#8a7dff',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(101,163,255,0.14),0 18px 40px rgba(30,64,175,0.25)',
      },
      backgroundImage: {
        grid: 'radial-gradient(circle at 1px 1px, rgba(148,163,184,0.15) 1px, transparent 0)',
      },
      keyframes: {
        pulseSlow: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        pulseSlow: 'pulseSlow 3s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
