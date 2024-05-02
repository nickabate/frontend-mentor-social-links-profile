import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        neutral: {
          10: 'hsl(0, 0%, 20%)',
          20: 'hsl(0, 0%, 12%)',
          30: 'hsl(0, 0%, 8%)'
        },
        green: {
          10: 'hsl(75, 94%, 57%)'
        }
      }
    },
  },
  plugins: [],
};
export default config;
