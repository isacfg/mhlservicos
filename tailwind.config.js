/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    fontFamily: {
      sans: ['Rubik', 'sans-serif'],
      serif: ['Karla', 'serif'],
      rubik: ['Rubik', 'sans-serif'],
      karla: ['Karla', 'sans-serif'],
    },
    screns: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
    },
    extend: {
      colors: {
        white: '#FFF',
        black: '#202020',
        lightGrey: '#EDEDED',
        darkGrey: '#8E91AA',
        mediumBrown: '#383131',
        lightRed: '#F97070',
        darkRed: '#FF4040',
        darkBlue: '#000422',
        wppGreen: '#00A12D',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require("daisyui")
  ],

  daisyui: {
    styled: true,
    themes: [
      {
        mytheme: {

          "primary": "#FF4040",

          "secondary": "#f3f4f6",

          "accent": "#ff4040",

          "neutral": "#202020",

          "base-100": "#FFFFFF",

          "info": "#38bdf8",

          "success": "#34d399",

          "warning": "#FBBD23",

          "error": "#F87272",
        },
      },
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  }
}
