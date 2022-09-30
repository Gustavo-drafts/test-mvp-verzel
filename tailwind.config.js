/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './src/components/**/*.tsx',
    './src/pages/**/*.tsx',
  ],
  theme: {
    extend: {},
    colors: {
      white: '#ffffff',

      gray100: '#f1f5f9',
      gray200: '#e2e8f0',
      gray500: '#64748b',
      gray600: '#4b5563',
      gray700: '#374151',
      gray800: '#1f2937',

      violet900: '#4c1d95',
      
      blue500: '#3b82f6',
    }
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
