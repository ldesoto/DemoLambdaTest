import { defineConfig, devices } from "@playwright/test";

/**
 * Configuration for Playwright tests
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: "./tests",
  timeout: 60 * 1000, // 60 seconds global timeout
  expect: {
    timeout: 15000, // 15 seconds for assertions
  },
  fullyParallel: false, // Run tests sequentially to avoid conflicts
  forbidOnly: !!process.env.CI, // Prohibir .only en CI
  retries: process.env.CI ? 2 : 1, // Más reintentos en CI, menos en desarrollo
  workers: 1, // Un solo worker para evitar conflictos
  reporter: [
    ["html"], // Reporte HTML para visualizar localmente
    ["list"], // Reporte en lista para la consola
  ],
  use: {
    // Timeouts
    actionTimeout: 15000,
    navigationTimeout: 30000,

    // Configuración de la URL base
    baseURL: "https://www.lambdatest.com",

    // Opciones de trazado y depuración
    trace: process.env.CI ? "on-first-retry" : "on",
    headless: !!process.env.CI, // Headless en CI, con navegador visible en desarrollo
    screenshot: "only-on-failure",
    video: "on-first-retry",
  },
  projects: [
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
        viewport: { width: 1280, height: 720 },
      },
    },
  ],
});
