/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'laravel-pink': '#F05340',
        'laravel-gray': '#6C6C6C',
        'php-color':'#474A8A',
        'javaScr-color':'yellow',
        'html-color':'#ff5733',
        'pg-color' :'#008bb9',
        'mysql-color' :'#00758F',
         'css-color' :'#2ecc71'
        
      },
    },
  },
  plugins: [],
}
