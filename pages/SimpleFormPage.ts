import { Page, Locator, expect } from '@playwright/test';

/**
 * Page Object for Simple Form Demo page
 */
export class SimpleFormPage {
  readonly page: Page;
  readonly messageInput: Locator;
  readonly getCheckedValueButton: Locator;
  readonly displayedMessage: Locator;

  /**
   * Initialize the Page Object with the Playwright page
   * @param page Playwright page
   */
  constructor(page: Page) {
    this.page = page;
    this.messageInput = page.locator('#user-message');  
    this.getCheckedValueButton = page.locator('#showInput');
    this.displayedMessage = page.locator('#message');
  }

  /**
   * Enter a message in the input field
   * @param message Message to enter
   */
  async enterMessage(message: string): Promise<void> {
    await this.messageInput.fill(message);
  }

  /**
   * Click the "Get Checked Value" button
   */
  async clickGetCheckedValue(): Promise<void> {
    await this.getCheckedValueButton.click();
  }

  /**
   * Get the displayed message text
   * @returns The text content of the displayed message
   */
  async getDisplayedMessage(): Promise<string | null> {
    return await this.displayedMessage.textContent();
  }

  /**
   * Validate that the displayed message matches the expected message
   * @param expectedMessage The message expected to be displayed
   */
  async validateDisplayedMessage(expectedMessage: string): Promise<void> {
    const actualMessage = await this.getDisplayedMessage();
    expect(actualMessage).toBe(expectedMessage);
  }
}