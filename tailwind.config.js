const basePath = process.env.BASEPATH

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        hindSiliguri: ['Hind Siliguri', "sans-serif"],
      },
      backgroundImage: {
        'gradient-art': `url('${basePath}/images/gradient-art-1.jpg')`
      }
    },
  },
  plugins: [],
}