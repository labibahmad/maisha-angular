/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  screens:{
    
  },
  theme: {
    extend: {
      colors: {
        'lion': "#aa8453",
        'lion-dark': "#937248",
        'eerie-black': "#222222",
        'coyote': "#80633e",
        'platinum': "#e0e0e0",
        'light-gray': "#e9e9e9"
      }
    },
  },
  screens: {
    sm: '640px',
    md: '768px',
    lg: '960px',
    xl: '1200px',
  },
  plugins: [],
}