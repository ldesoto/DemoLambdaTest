/**
 * Test data for Simple Form Demo
 */
export const simpleFormData = {
  message: "Welcome to LambdaTest",
  expectedOutput: "Welcome to LambdaTest",
};

/**
 * Test data for Drag & Drop Sliders
 */
export const sliderData = {
  sliderIndex: 2, // Index of the slider to test (0-based)
  targetValue: 95, // Target value to drag the slider to
  tolerance: 3, // Allowed tolerance for slider value (±3)
};

/**
 * Test data for Input Form Submit
 */
export const formData = {
  userInfo: {
    name: "Test User",
    email: "test@example.com",
    password: "Password123",
  },
  companyInfo: {
    company: "Test Company",
    website: "https://example.com",
  },
  addressInfo: {
    country: "United States",
    city: "New York",
    address1: "123 Test Street",
    address2: "Apt 456",
    state: "NY",
    zip: "10001",
  },
  successMessage: "Thanks for contacting us",
};

/**
 * URLs for test pages
 */
export const urls = {
  playground: "/selenium-playground",
  simpleForm: "/simple-form-demo",
  dragDropSliders: "/drag-drop-range-sliders-demo",
  inputForm: "/input-form-demo",
};

/**
 * Specific timeouts for certain operations
 */
export const timeouts = {
  pageLoad: 5000,
  sliderDrag: 2000,
  messageCheck: 15000,
};
