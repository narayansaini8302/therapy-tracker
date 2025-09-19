export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: {
          100: "#1E293B",
          200: "#172033",
          300: "#0F172A",
          400: "#0A101F",
        },
        neon: {
          blue: "#3B82F6",
          purple: "#8B5CF6",
          pink: "#EC4899",
        },
      },
      boxShadow: {
        "glow-blue": "0 0 15px rgba(59, 130, 246, 0.5)",
        "glow-purple": "0 0 15px rgba(139, 92, 246, 0.5)",
        "glow-pink": "0 0 15px rgba(236, 72, 153, 0.5)",
      },
    },
  },
  plugins: [],
};
