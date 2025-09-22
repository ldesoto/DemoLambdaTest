# 🚀 LambdaTest Selenium Playground Tests

![Playwright](https://img.shields.io/badge/Playwright-45ba4b?style=for-the-badge&logo=playwright&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![LambdaTest](https://img.shields.io/badge/LambdaTest-262728?style=for-the-badge&logo=lambdatest&logoColor=white)

This project contains automated tests for LambdaTest Selenium Playground using Playwright with TypeScript, following an optimized and maintainable architectural approach.

## ✨ Features and Best Practices

- **Modular Architecture**: Base class pattern with inheritance for specific components
- **Optimized Helper Pattern**: Improved implementation of the POM (Page Object Model) pattern
- **Test Data Management**: Centralized data organized by domain
- **Robust Waiting Strategy**: Multiple waiting mechanisms to ensure stability
- **Clean Code**: Organized and well-documented structure
- **Error Handling**: Robust error handling and recovery
- **AAA Approach**: Arrange-Act-Assert clearly defined in tests

## 📋 Test Scenarios

### 🔍 Scenario 1: Simple Form Demo

```
✅ Open LambdaTest Selenium Playground
✅ Click on "Simple Form Demo"
✅ Validate that the URL contains "simple-form-demo"
✅ Enter a message in the text field
✅ Click on "Get Checked Value"
✅ Validate that the message is displayed correctly
```

### 🎚️ Scenario 2: Drag & Drop Sliders

```
✅ Open Selenium Playground and click on "Drag & Drop Sliders"
✅ Select the slider with default value 15 and drag it to 95
✅ Validate that the range value shows approximately 95 (with tolerance)
```

### 📝 Scenario 3: Input Form Submit

```
✅ Open Selenium Playground and click on "Input Form Submit"
✅ Click on "Submit" without filling in any information
✅ Verify form validation
✅ Fill in all fields and select "United States" from the dropdown
✅ Submit the form
✅ Validate the success message
```

## 🛠️ Setup

1. **Prerequisites**: Make sure you have Node.js 16 or higher installed

   ```bash
   node --version
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Install Playwright browsers**:
   ```bash
   npm run prepare
   ```

## ▶️ Running Tests

### Run all tests:

```bash
npm test
```

### Run specific tests:

```bash
# Run only scenario 1
npm run test:scenario1

# Run only scenario 2
npm run test:scenario2

# Run only scenario 3
npm run test:scenario3
```

### Run tests with UI:

```bash
npm run test:ui
```

### Run tests in debug mode:

```bash
npm run test:debug
```

### Run tests with visible browser:

```bash
npm run test:headed
```

### View test report:

```bash
npm run report
```

### Cleanup, Linting and Type Checking:

```bash
# Clean previous test results
npm run clean

# Run ESLint
npm run lint

# Fix linting issues
npm run lint:fix

# Check TypeScript types
npm run type-check
```

## 📁 Project Structure

```
lambdatest-playwright-demo/
├── helpers/              # Helper classes and test data
│   ├── lambdaTestHelper.ts  # Helpers organized by inheritance pattern
│   └── testData.ts       # Test data structured by domain
├── tests/                # Test cases
│   └── lambdatest.spec.ts # Test scenarios using AAA pattern
├── playwright.config.ts  # Playwright configuration
├── tsconfig.json         # TypeScript configuration
├── .eslintrc.js          # ESLint configuration
└── package.json          # Dependencies and scripts
```

## ⚙️ Stability Strategies

To improve test stability, the following strategies were implemented:

1. **Multiple Selectors**: Each element can be located using several alternative selectors
2. **Adaptive Waits**: Combination of explicit and implicit waits depending on context
3. **Exception Handling**: Capture and recovery from errors during element interaction
4. **Validation Tolerance**: Especially in sliders where exact precision is not possible
5. **Automatic Screenshots**: For diagnostics in case of failures

## 🌐 Useful Links

- [Playwright Documentation](https://playwright.dev/docs/intro)
- [LambdaTest Selenium Playground](https://www.lambdatest.com/selenium-playground)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

## 📄 License

ISC

```
project/
├── helpers/
│   ├── lambdaTestHelper.ts   # Helper functions for interacting with LambdaTest pages
│   └── testData.ts           # Test data and constants
├── tests/
│   └── lambdatest.spec.ts    # All test scenarios in one file
├── playwright.config.ts      # Playwright Configuration
├── package.json              # Dependencies and Scripts
└── README.md                 # Documentation
```

## 📊 Implementation Details

- **Approach**: E2E tests that simulate real user interactions
- **Design Pattern**: Helper pattern for simplified page interactions
- **Assertions**: Complete functionality and UI validations
- **Screenshots**: Captures screenshots in case of failures
- **Reports**: Detailed HTML execution reports

---

### 📝 Notes

- Tests are configured to run on Chrome by default
- Headless mode is disabled to see visual execution
- Global timeout configured to 30 seconds

---

Developed with ❤️ to demonstrate test automation skills