/** @type {import('tailwindcss').Config} */
module.exports = {
   // Enable dark mode based on the 'class' attribute
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Light mode colors
        light: {
          primary: '#ffffff',
          secondary: '#f3f4f6',
          // Add more light mode colors here
        },
        // Dark mode colors
        dark: {
          primary: '#1f2937',
          secondary: '#374151',
          // Add more dark mode colors here
        },
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    }
  },
  variants: {
    extend: {
      backgroundColor: ['dark', 'dark-hover', 'dark-group-hover', 'dark-even', 'dark-odd'],
      borderColor: ['dark', 'dark-disabled', 'dark-focus', 'dark-placeholder'],
      textColor: ['dark', 'dark-hover', 'dark-active', 'dark-placeholder'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'), // Include Tailwind forms plugin
    require('tailwindcss'),
    require('autoprefixer'),
  ],
};
