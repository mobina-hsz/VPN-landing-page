/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#F53855",
          light: "#FFECEC",
          dark: "#D62843",
        },
        dark: {
          heading: "#0B132A",
          body: "#4F5665",
        },
        cardBorder: "#DDDDDD",
        grayBg: "#F8F8F8",
        grayDivider: "#EEEFF2",
        grayMuted: "#AFB5C0",
        greenCheck: "#2FAB73",
      },
      fontFamily: {
        vazir: ["Vazirmatn", "Rubik", "sans-serif"],
        rubik: ["Rubik", "Vazirmatn", "sans-serif"],
      },
      boxShadow: {
        'brand': '0px 20px 40px -15px rgba(245, 56, 85, 0.45)',
        'brand-sm': '0px 10px 25px -5px rgba(245, 56, 85, 0.35)',
        'card': '0px 20px 45px rgba(13, 16, 37, 0.06)',
        'card-hover': '0px 25px 50px rgba(245, 56, 85, 0.15)',
        'float': '0px 25px 55px rgba(13, 16, 37, 0.08)',
        'header': '0px 8px 30px rgba(13, 16, 37, 0.04)',
      },
      borderRadius: {
        '10': '10px',
      }
    },
  },
  plugins: [],
}
