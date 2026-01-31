const { test, expect } = require('@playwright/test');

test('Pos_UI_0001 - Output remains stable when input text is deleted', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const input = page.locator('textarea');
  const outputLocator = page.locator('div.whitespace-pre-wrap').first();

  await input.fill('mama bath kanavaa');

  await expect(outputLocator).toContainText('කනවා', { timeout: 10000 });

  await input.fill('mama bath');

  await expect(outputLocator).toContainText('මම', { timeout: 10000 });

  const output = await outputLocator.innerText();

  expect(output.length).toBeGreaterThan(0);
});
