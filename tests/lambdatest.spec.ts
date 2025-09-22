import { test, expect } from "@playwright/test";
import { LambdaTestHelper } from "../helpers/lambdaTestHelper";
import {
  simpleFormData,
  sliderData,
  formData,
  timeouts,
} from "../helpers/testData";

/**
 * Test suite for LambdaTest Selenium Playground demonstration
 * Scenarios:
 * 1. Simple Form Demo - Simple input validation
 * 2. Drag & Drop Sliders - Slider functionality
 * 3. Input Form Submit - Form validation and submission
 */
test.describe("LambdaTest Selenium Playground Tests", () => {
  // Set a longer timeout for all tests
  test.setTimeout(90000);

  /**
   * Scenario 1: Validate simple form functionality
   * Steps:
   * 1. Navigate to Simple Form Demo
   * 2. Validate the URL
   * 3. Submit a message in the form
   * 4. Verify that the message is displayed correctly
   */
  test("Scenario 1: Validate simple form functionality", async ({ page }) => {
    // Arrange
    console.log("Starting Simple Form Demo test");
    const helper = new LambdaTestHelper(page);

    // Act
    await helper.gotoSimpleFormDemo();
    await expect(page).toHaveURL(/.*simple-form-demo/);
    const displayedMessage = await helper.testSimpleForm(
      simpleFormData.message
    );

    // Assert
    expect(displayedMessage).toBe(simpleFormData.expectedOutput);
    console.log("Simple Form Demo test completed");
  });

  /**
   * Scenario 2: Validate drag and drop sliders functionality
   * Steps:
   * 1. Navigate to Drag & Drop Sliders
   * 2. Drag the slider to the target value
   * 3. Verify that the slider value is close to the target value
   */
  test("Scenario 2: Validate drag and drop sliders functionality", async ({
    page,
  }) => {
    // Arrange
    console.log("Starting Drag & Drop Sliders test");
    const helper = new LambdaTestHelper(page);

    // Act
    await helper.gotoDragDropSliders();
    await page.waitForTimeout(timeouts.pageLoad);

    await helper.dragSlider(sliderData.sliderIndex, sliderData.targetValue);

    // Esperar a que se actualice el valor
    await page.waitForTimeout(timeouts.sliderDrag);
    const sliderValue = await helper.getSliderValue(sliderData.sliderIndex);

    // Assert
    if (sliderValue) {
      const numericValue = parseInt(sliderValue.trim(), 10);

      // Use a numeric comparison with tolerance
      expect(numericValue).toBeGreaterThanOrEqual(
        sliderData.targetValue - sliderData.tolerance
      );
      expect(numericValue).toBeLessThanOrEqual(
        sliderData.targetValue + sliderData.tolerance
      );

      console.log(
        `Slider value ${numericValue} is within target range ${sliderData.targetValue}±${sliderData.tolerance}`
      );
    } else {
      throw new Error("Could not get slider value");
    }

    console.log("Drag & Drop Sliders test completed");
  });

  /**
   * Scenario 3: Validate form submission
   * Steps:
   * 1. Navigate to Input Form Submit
   * 2. Try to submit an empty form (validation should prevent it)
   * 3. Fill the form with valid data
   * 4. Submit the form
   * 5. Verify the success message
   */
  test("Scenario 3: Validate form submission", async ({ page }) => {
    // Arrange
    console.log("Starting Input Form Submit test");
    const helper = new LambdaTestHelper(page);

    // Act - Part 1: Empty form validation
    await helper.gotoInputFormSubmit();
    await page.waitForTimeout(timeouts.pageLoad);

    await helper.submitEmptyForm();
    // The URL should not change if validation works
    await expect(page).toHaveURL(/.*input-form-demo/);

    // Act - Part 2: Valid form submission
    // Combine all form data
    const fullFormData = {
      ...formData.userInfo,
      ...formData.companyInfo,
      ...formData.addressInfo,
    };

    await helper.fillAndSubmitForm(fullFormData);

    // Assert
    try {
      const successMessage = await helper.getSuccessMessage();
      expect(successMessage).toContain(formData.successMessage);
    } catch (error) {
      console.log("Warning: Could not find success message, taking screenshot");
      await page.screenshot({ path: `form-test-error-${Date.now()}.png` });
      throw error;
    }

    console.log("Input Form Submit test completed");
  });
});
