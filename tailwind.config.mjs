// tailwind.config.mjs
import { join } from 'path'

const config = {
  content: [
    join(__dirname, 'pages/**/*.{js,ts,jsx,tsx}'),
    join(__dirname, 'components/**/*.{js,ts,jsx,tsx}'),
    join(__dirname, 'features/**/*.{js,ts,jsx,tsx}'), // note the slash
  ],
  theme: {
    extend: {
      colors: {
        primary:   'hsl(var(--primary)   / <alpha-value>)',
        secondary: 'hsl(var(--secondary) / <alpha-value>)',
      },
    },
  },
}

export default config
