module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
    project: "./tsconfig.json",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  parser: "@typescript-eslint/parser",
  plugins: ["react", "react-hooks", "import", "jsx-a11y", "@typescript-eslint", "prettier"],
  extends: [
    "airbnb",
    "airbnb-typescript",
    "plugin:eslint-comments/recommended",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "plugin:storybook/recommended",
  ],
  rules: {
    "prefer-destructuring": 0,
    // Too useful in looping constructs to make a rule against
    "no-plusplus": 0,
    "no-underscore-dangle": 0,
    "no-nested-ternary": 0,
    "no-unused-vars": 0,
    "no-console": 0,
    "global-require": 0,
    "react/no-unescaped-entities": 0,
    "no-lonely-if": 0,
    radix: 0,
    // "array-callback-return": 0,
    "prettier/prettier": [
      "error",
      {
        printWidth: 120,
        endOfLine: "auto",
      },
    ],
    "@typescript-eslint/no-unused-vars": ["error", { varsIgnorePattern: "[iI]gnored" }],
    // "@typescript-eslint/quotes": ["error", "double", { avoidEscape: true, allowTemplateLiterals: false }],
    // "@typescript-eslint/comma-dangle": 0,
    "@typescript-eslint/no-unsafe-member-access": 0,
    "@typescript-eslint/restrict-template-expressions": 0,
    "@typescript-eslint/no-unused-expressions": "error",
    "@typescript-eslint/no-unsafe-assignment": 0,
    "@typescript-eslint/no-unsafe-return": 0,
    "@typescript-eslint/no-unsafe-argument": 0,
    "@typescript-eslint/no-unsafe-call": 0,
    "@typescript-eslint/ban-ts-comment": 0,
    "@typescript-eslint/no-floating-promises": 0,
    "@typescript-eslint/no-empty-function": 0,
    "@typescript-eslint/naming-convention": 0,
    "@typescript-eslint/no-var-requires": 0,
    "@typescript-eslint/no-misused-promises": [
      2,
      {
        checksVoidReturn: {
          attributes: false,
        },
      },
    ],
    "@typescript-eslint/no-misused-promises": [
      "error",
      {
        "checksVoidReturn": false
      }
    ],
    // Sometimes you gotta
    "@typescript-eslint/no-explicit-any": 0,
    "react/no-array-index-key": 0,
    "react/react-in-jsx-scope": 0,
    "react/require-default-props": 0,
    "react/jsx-props-no-spreading": 0,
    "react/prop-types": 0,
    "react/button-has-type": 0,
    "react/destructuring-assignment": 0,
    "react/no-unstable-nested-components": 0,
    "react/jsx-no-constructed-context-values": 0,
    // I don't know why props shouldn't be allowed to be functions..
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
    "eslint-comments/no-unused-disable": "error",
    "react/function-component-definition": 0,
    "import/no-extraneous-dependencies": [0],
    "import/no-cycle": "off",
  },
  overrides: [
    {
      files: ["src/utils/Utils.ts"],
      rules: {
        "eslint-comments/no-unused-disable": 0,
      },
    },
  ],
  ignorePatterns: [".eslintrc*.js", "src/aws-exports.ts", "src/components/Landing/LP.tsx", "src/components/Landing/DIST.tsx" ],
};
