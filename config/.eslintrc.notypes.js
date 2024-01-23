const { join } = require("path");

module.exports = {
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  plugins: ["react", "react-hooks", "import", "jsx-a11y", "prettier"],
  extends: [
    "airbnb",
    "plugin:eslint-comments/recommended",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
  ],
  rules: {
    "prefer-destructuring": 0,
    // Too useful in looping constructs to make a rule against
    "no-plusplus": 0,
    "no-underscore-dangle": 0,
    "no-unused-vars": 0,
    "no-console": 0,
    "global-require": 0,
    radix: 0,
    // "array-callback-return": 0,
    "prettier/prettier": [
      "error",
      {
        printWidth: 120,
      },
    ],
    "react/no-array-index-key": 0,
    "react/react-in-jsx-scope": 0,
    "react/require-default-props": 0,
    "react/jsx-props-no-spreading": 0,
    "react/prop-types": 0,
    "react/button-has-type": 0,
    "react/destructuring-assignment": 0,
    "react/no-unstable-nested-components": 0,
    "react/jsx-no-constructed-context-values": 0,
    "react/no-unescaped-entities": 0,
    // I don't know why props shouldn't be allowed to be functions.
    "react/jsx-no-bind": 0,
    // lots of href="#" in the codebase currently
    "jsx-a11y/anchor-is-valid": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "jsx-a11y/no-static-element-interactions": 0,
    // https://stackoverflow.com/questions/54446655/eslint-rule-for-label
    "jsx-a11y/label-has-associated-control": 0,
    "jsx-a11y/no-redundant-roles": 0,
    "jsx-a11y/interactive-supports-focus": 0,
    "import/extensions": 0,
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: false,
        optionalDependencies: false,
        peerDependencies: false,
        packageDir: join(__dirname, "../"),
      },
    ],
    "eslint-comments/no-unused-disable": "error",
    "eslint-comments/disable-enable-pair": 0,
    // specific to config/
    "no-param-reassign": 0,
    "import/no-dynamic-require": 0,
  },
  ignorePatterns: ["config/.eslintrc.js"],
};
