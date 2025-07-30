/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ["selector", 'class'],
  theme: {
  	extend: {
  		fontFamily: {
  			sans: ['Lexend', 'sans-serif'],
  			heading: ['Silkscreen', 'monospace'],
  			mono: ['Fira Code', 'JetBrains Mono', 'Courier New', 'monospace'],
  		},
  		colors: {
  			primary: {
  				'100': '#e6f5e6',
  				'200': '#c2e0c2',
  				'300': '#9ecb9e',
  				'400': '#7ab67a',
  				'500': '#56a156',
  				'600': '#3d8c3d',
  				'700': '#2b772b',
  				'800': '#1a611a',
  				'900': '#0a4c0a',
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			neutral: {
  				'50': 'hsl(var(--neutral-50))',
  				'100': 'hsl(var(--neutral-100))',
  				'200': 'hsl(var(--neutral-200))',
  				'300': 'hsl(var(--neutral-300))',
  				'400': 'hsl(var(--neutral-400))',
  				'500': 'hsl(var(--neutral-500))',
  				'600': 'hsl(var(--neutral-600))',
  				'700': 'hsl(var(--neutral-700))',
  				'800': 'hsl(var(--neutral-800))',
  				'900': 'hsl(var(--neutral-900))'
  			},
  			'electric-blue': {
  				DEFAULT: 'hsl(var(--electric-blue))',
  			},
  			'lime-green': {
  				DEFAULT: 'hsl(var(--lime-green))',
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			aqua: {
  				DEFAULT: 'hsl(var(--aqua))',
  				foreground: 'hsl(var(--aqua-foreground))',
  			},
  			violet: {
  				DEFAULT: 'hsl(var(--violet))',
  				foreground: 'hsl(var(--violet-foreground))',
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  			},
  			chat: {
  				DEFAULT: 'hsl(var(--chat-bg))',
  				border: 'hsl(var(--chat-border))',
  			},
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		backgroundColor: {
  			'neutral-900': '#171717'
  		},
  		textColor: {
  			'neutral-900': '#171717'
  		},
  		borderRadius: {
  			button: '4px',
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)',
  			'2xl': '1rem',
  			'3xl': '1.5rem',
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}

module.exports = config