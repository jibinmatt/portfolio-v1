import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    colors: {
      // Using modern `rgb`
      "body-bg-color": 'rgb(var(--body-bg-color))',
      "main-bg-color": 'rgb(var(--main-bg-color))',
      "accent-color": 'rgb(var(--accent-color))',
      "primary-txt-color": 'rgb(var(--primary-txt-color))',
      "secondary-txt-color": 'rgb(var(--secondary-txt-color))',
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
} satisfies Config;
