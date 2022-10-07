module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens:{
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl' : '1536px',
    },
    extend: {
      inset: {
        '17':'68px',
        '18':'72px',
        '19':'76px',
      },
      spacing: {
        '17': '68px',
        '18': '72px',
        '19': '76px',
      },
      fontFamily : {
        Keania_One : ['Keania One'],
        roboto : ['Roboto'],
        poppins : ['Poppins'],
        manrope :['Manrope']
      },
      keyframes: {
        bounce: {
            '0%, 100%': {
                transform: 'translateX(-25%)'
              },
              '50%' : {
                transform: 'translateX(25%)'
              }
        },
      },
      animation: {
        'bounce-right' :  'bounce 3s linear infinite',
      }
    },
  },
  plugins: [],
}
