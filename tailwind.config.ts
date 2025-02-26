import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes:{
        upDown:{
          "0%":{
            transform: "translateY(8px)"
          },
          "100%":{
            transform: "translateY(0)"
          },
        },
        leftRight:{
          "0%": {
            transform: "translateX(8px)"
          },
          "100%":{
            transform: "translateX(0)"
          }
        }
      },
      animation:{
        upDown: "upDown 1s alternate-reverse infinite",
        leftRight: "leftRight 1s alternate-reverse infinite"
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
