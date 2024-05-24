const { getEslintConfig } = require("@harmonix-hub/eslint");

const baseConfig = getEslintConfig();

/** @type import("eslint").Linter.Config */
module.exports = {
  ...baseConfig,
  rules: {
    ...baseConfig.rules,
    "no-console": "error",
  },
};
