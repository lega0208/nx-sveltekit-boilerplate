module.exports = {
  mode: 'jit',
  content: [
    './src/app.html',
    './src/routes/**/*.{html,js,svelte,ts}',
    './src/lib/**/*.{html,js,svelte,ts}'
  ],
  theme: {
    fontFamily: {
      sans: [
        'Raleway',
        '"Open Sans"',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        'Oxygen-Sans',
        'Ubuntu',
        'Cantarell',
        '"Helvetica Neue"',
        'sans-serif',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
    },
    colors: {
      transparent: 'none',
      white: '#ffffff',
      'gray-lightest': '#faf9f8',
      'gray-lighter': '#e6e5e4',
      'gray-light': '#d2d1d0',
      gray: '#c0bfbd',
      'gray-dark': '#989796',
      'gray-darker': '#706f6e',
      'gray-darkest': '#4a4948',
      black: '#222120',

      'brand-light': '#fbe3c6',
      brand: '#d4950d',
      'brand-dark': '#664914',

      'cta-light': '#d3ebf4',
      cta: '#0db0d4',
      'cta-dark': '#1f5564',

      'info-light': '#e2f3f4',
      info: '#86ced2',
      'info-dark': '#436263',

      'warning-light': '#fff2cb',
      warning: '#f7ce04',
      'warning-dark': '#756218',

      'success-light': '#e1f8d0',
      success: '#73de3a',
      'success-dark': '#3c6924',

      'danger-light': '#ffd6cc',
      danger: '#f7513d',
      'danger-dark': '#762d22',
    },
    extend: {
      rotate: {
        360: '360deg',
      },
      transitionTimingFunction: {
        spring: 'cubic-bezier(0.45, -0.7, 0.62, 1.71)',
        slowfast: 'cubic-bezier(.35,-0.7,.62,1.61)',
      },
    },
  },
  variants: {
    extend: {
      cursor: ['hover', 'focus'],
    },
  },
  plugins: [],
};
