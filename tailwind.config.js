module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
            },
          },
          "postcss-loader",
        ],
      },
    ],
  },
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 2s linear infinite",
        "move-up": "moveUp 0.5s ease-out",
        "move-down": "moveDown 0.5s ease-out",
        "move-left": "moveLeft 0.5s ease-out",
        "move-right": "moveRight 0.5s ease-out",
        "fade-in": "fadeIn 0.5s ease-out",
        "fade-out": "fadeOut 0.5s ease-out",
        "scale-in": "scaleIn 0.5s ease-out",
        "scale-out": "scaleOut 0.5s ease-out",
        "rotate-in": "rotateIn 0.5s ease-out",
        "rotate-out": "rotateOut 0.5s ease-out",
        "slide-up": "slideUp 0.5s ease-out",
        "slide-down": "slideDown 0.5s ease-out",
        "slide-left": "slideLeft 0.5s ease-out",
        "slide-right": "slideRight 0.5s ease-out",
        bounce: "bounce 0.5s ease-out",
        flash: "flash 0.5s ease-out",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        shake: "shake 0.5s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        swing: "swing 1s ease-in-out infinite",
        tada: "tada 1s ease-in-out infinite",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    require("tailwindcss-animations")(),
  ],
};
