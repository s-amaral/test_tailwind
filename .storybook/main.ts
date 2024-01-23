import type { StorybookConfig } from "@storybook/react-webpack5";

// @ts-ignore
const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-storysource",
    {
      name: "@storybook/addon-styling",
      options: {
        // Check out https://github.com/storybookjs/addon-styling/blob/main/docs/api.md
        // For more details on this addon's options.
        postCss: {
          implementation: require("postcss"),
        },
        sass: {
          implementation: require("sass"),
        },
      },
    },
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: { fastRefresh: true },
  },
  webpackFinal: (webpackConfig) => {
    // Load SVGs as text, so we can inline them
    // eslint-disable-next-line no-param-reassign
    webpackConfig.module.rules = [
      ...webpackConfig.module.rules.map((rule) => {
        // @ts-expect-error
        if (rule.test instanceof RegExp && rule.test.test("test.svg")) {
          // Remove .svg's from any existing rule
          // @ts-expect-error
          const regExpModifiedText = rule.test.toString().replace("svg|", "").replace("$/", "$").replace("/", "");
          // @ts-expect-error
          // eslint-disable-next-line no-param-reassign
          rule.test = new RegExp(regExpModifiedText);
          // // @ts-expect-error
          return rule;
        }

        return rule;
      }),
      {
        test: /\.svg$/i,
        type: "asset/inline",
      },
    ];

    return webpackConfig;
  },
};
export default config;
