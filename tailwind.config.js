/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#50d3b0",

          secondary: "#3f7da3",

          accent: "#03315b",

          neutral: "#1d1825",

          "base-100": "#333947",

          info: "#81d1e9",

          success: "#199467",

          warning: "#ed9726",

          error: "#fb5b86",
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
