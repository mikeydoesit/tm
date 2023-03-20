/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  purge: ['./src/**/*.svelte', './src/**/*.css'],
  media: false,
  theme: {
    colors: {
      app_bgd: '#f8f8f8',
      white: '#ffffff',
      ash: '#939393',
      black: '#000000',
      red: '#FF0000',
      transparent: 'transparent',
      grey: '#a9abaf',
      orange: '#f9742a',
      greeting_grey: '#d9d9db',
      input_gradient_from: '#4e5159',
      input_gradient_to: '#62656b'
    },
    gridTemplateColumns: {
      'tapbarmenu': '1fr 1fr 1fr 1fr'
    },
    gridTemplateRows: {
      'tapbarmenu': '100%'
    },
    extend: {},
  },
  plugins: [],
}
