module.exports = {
  extends: "stylelint-config-standard-scss",
  rules: {
    // This doesn't really matter, and isn't worth fixing imo - ch
    "selector-class-pattern": null,
    // We should fix all of these in the future, but it's a lot of work for right now if things are working
    "no-descending-specificity": null,
    "property-no-vendor-prefix": [true, { "disableFix": true }]
  },
  // for styled-components: https://styled-components.com/docs/tooling#stylelint
  customSyntax: "postcss-styled-syntax"
}
