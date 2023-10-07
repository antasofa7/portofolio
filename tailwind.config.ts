import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem'
      },
      fontFamily: {
        'lexend-mega': ['Lexend Mega', 'sans-serif']
      },
      fontSize: {
        'hero': '150px'
      },
      lineHeight: {
        'zero': '0.7',
      },
      colors: {
        'reindeer-moss': '#BAFCA2',
        'coin-slot': '#FF4911',
        'yellow':'#FFFF00',
        'sugar-pills': '#FCDFFF',
        'turquoise-sea': '#69D2E7',
        'diva': '#C4A1FF',
        'sandy-bay': '#F8D6B3',
        'orochimaru': '#D9D9D9'
      },
      boxShadow: {
        'neubrutal': '7px 7px 0 rgba(0, 0, 0, 1)'
      },
      dropShadow: {
        'neubrutal': '5px 5px 0 rgba(0, 0, 0, 1)'
      },
      animation: {
        typing: 'typing 3s steps(16, end) forwards, blink .5s step-end infinite alternate'
      },
      keyframes: {
        typing: {
          from: {width: '0'}
        },
        blink: {
          '50%': {'border-color': 'transparent'}
        }
      }
      // backgroundImage: {
      //   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      //   'gradient-conic':
      //     'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      // },
    },
  },
  plugins: [],
}
export default config
