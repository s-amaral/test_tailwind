module.exports = {
  rules: {
    "no-console": 1,
  },
  overrides: [
    {
      files: ["scripts/*", "src/serviceWorker.ts"],
      rules: {
        "no-console": 0,
      },
    },
  ],
};
