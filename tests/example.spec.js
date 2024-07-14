const { test, expect } = require('@playwright/test');

test('check that the title is "Xitlaly Prado"', async ({ page }) => {
  await page.goto('/'); // Use the full URL

  // Get the title of the page
  const title = await page.title();

  // Check if the title is "Xitlaly Prado"
  await expect(title).toBe('Xitlaly Prado');
});

test('check that UTF-8 meta tag is present', async ({ page }) => {
  //Arrange: Go to the site homepage
  await page.goto('/');

  //Act: Get the content attribute of the meta charset tag
  const metaCharset = await page.$eval('meta[charset]', (meta) => meta.getAttribute('charset'));

  //Assert: Check if the charset is set to UTF-8
  await expect(metaCharset).toBe('utf-8');
});

test('check that affiliations page exists', async ({ page }) => {
  // Go to the site homepage
  await page.goto('/');

  // Click on the Affiliations link in the menu
  await page.click('text=Affiliations');

  // Wait for the affiliations section to be visible
  const affiliationsSection = page.locator('.affiliations');
  
  // Assert: Check if the affiliations section is visible
  await expect(affiliationsSection).toBeVisible();
});