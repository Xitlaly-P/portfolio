const { test, expect } = require('@playwright/test');

test('check that the title is "Xitlaly Prado"', async ({ page }) => {
  await page.goto('/'); // Use the full URL

  // Get the title of the page
  const title = await page.title();

  // Check if the title is "Xitlaly Prado"
  await expect(title).toBe('Xitlaly Prado');
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

test('check that projects section exists', async ({ page }) => {
  // Go to the site homepage
  await page.goto('/');

  // Click on the Projects link in the menu
  await page.click('text=Projects');

  // Wait for the projects section to be visible
  const projectsSection = page.locator('#projects');
  
  // Assert: Check if the projects section is visible
  await expect(projectsSection).toBeVisible();
});