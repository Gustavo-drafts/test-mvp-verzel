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
      gray500: '#64748b',
      gray600: '#4b5563',
      gray700: '#374151',
      gray800: '#1f2937',
      
      blue500: '#3b82f6',
    }
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
