const { test, expect } = require('@playwright/test');
const { predictTF } = require('./utils/tf');

test('TF', async ({ page }) => {
  await page.goto('https://js-hcw1c9.stackblitz.io/');
  await page.getByText('Run this project').click();

  // Blank by default
  await page.getByTestId('plot').screenshot({ path: './temp/test.png' });
  const defaultValue = await predictTF('test.png');
  expect(defaultValue).toBe('Blank');

  // Sine is selected
  await page.getByTestId('btn-sine').click();
  await page.getByTestId('plot').screenshot({ path: './temp/test.png' });
  const selectedValue = await predictTF('test.png');
  expect(selectedValue).toBe('Sine');
});
