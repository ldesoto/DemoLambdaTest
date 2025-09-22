module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  env: {
    node: true,
    es6: true,
  },
  rules: {
    // Prevent common errors
    "no-console": "off", // Allow console.log for debugging
    "no-debugger": "error", // Don't allow debugger
    "no-duplicate-imports": "error", // Avoid duplicate imports
    "no-var": "error", // Use let/const instead of var
    "prefer-const": "error", // Prefer const when not reassigned

    // TypeScript improvements
    "@typescript-eslint/explicit-function-return-type": "warn", // Require explicit return types
    "@typescript-eslint/no-explicit-any": "warn", // Warn about using 'any'
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        // Avoid unused variables
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
      },
    ],
    "@typescript-eslint/naming-convention": [
      // Naming conventions
      "error",
      {
        selector: "interface",
        format: ["PascalCase"],
        prefix: ["I"],
      },
      {
        selector: "class",
        format: ["PascalCase"],
      },
      {
        selector: "method",
        format: ["camelCase"],
      },
    ],

    // Style and format
    semi: ["error", "always"], // Require semicolon
    quotes: ["error", "single", { avoidEscape: true }], // Single quotes
    indent: ["error", 2], // 2 space indentation
    "max-len": ["warn", { code: 100 }], // Maximum line length
  },
  ignorePatterns: [
    "node_modules",
    "dist",
    "playwright-report",
    "test-results",
    "*.js",
  ],
};
