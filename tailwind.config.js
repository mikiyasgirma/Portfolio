module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "vscode-background": "url('/assets/vs-code-back.jpg')",
      }),
      fontFamily: {
        Roboto: ["Roboto mono", "monospace"],
      },
    },
  },
  plugins: [],
};
