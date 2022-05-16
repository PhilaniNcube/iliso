module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/images/bulldozer.jpg')",
      },
      fontFamily: {
        mont: 'Montserrat',
        'mont-light': 'Montserrat-Light',
        'mont-medium': 'Montserrat-Medium',
        'mont-bold': 'Montserrat-Bold',
        'mont-extrabold': 'Montserrat-ExtraBold',
      },
    },
  },
  plugins: [],
}
