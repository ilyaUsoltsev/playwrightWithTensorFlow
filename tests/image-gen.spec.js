const { test, expect } = require('@playwright/test');

test('Blank', async ({ page }) => {
  await page.goto('https://js-hcw1c9.stackblitz.io/');
  // bypass the stackblitz security screen
  await page.getByText('Run this project').click();
  for (let i = 0; i < 50; i++) {
    await page.getByTestId('btn-blank').click();
    await page.waitForTimeout(10 * i);
    await page.getByTestId('plot').screenshot({
      path: `./images/blank/blank_${i}.png`,
    });
  }
});

test('Line', async ({ page }) => {
  await page.goto('https://js-hcw1c9.stackblitz.io/');
  // bypass the stackblitz security screen
  await page.getByText('Run this project').click();
  await page.getByTestId('btn-line').click();
  for (let i = 0; i < 50; i++) {
    await page.waitForTimeout(10 * i);
    await page.getByTestId('plot').screenshot({
      path: `./images/line/line_${i}.png`,
    });
  }
});

test('Sine', async ({ page }) => {
  await page.goto('https://js-hcw1c9.stackblitz.io/');
  // bypass the stackblitz security screen
  await page.getByText('Run this project').click();
  await page.getByTestId('btn-sine').click();
  for (let i = 0; i < 50; i++) {
    await page.waitForTimeout(10 * i);
    await page.getByTestId('plot').screenshot({
      path: `./images/sine/sine_${i}.png`,
    });
  }
});
