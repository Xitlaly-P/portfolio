const { test, expect } = require('@playwright/test');

test('check that the title is "Xitlaly Prado"', async ({ page }) => {
  await page.goto('/'); // Use the full URL

  // Get the title of the pag
  const title = await page.title();

  // Check if the title is "Xitlaly Prado"
  await expect(title).toBe('Xitlaly Prado');
});

test('Check specific projects in "Projects" section', async ({ page }) => {
  await page.goto('/'); // Use the full URL

  // Check if specific projects are listed in the "Projects" section
  const project1 = await page.locator('text=Cosmic Clips');
  await expect(project1).toBeVisible();
});

test('Check presence of "Hero" section', async ({ page }) => {
  await page.goto('/'); // Use the full URL

  // Check if the "Hero" section is present
  const heroText = await page.locator('.hero-text h1');
  await expect(heroText).toBeVisible();
  await expect(heroText).toHaveText('Xitlaly Prado');
});

test('Check presence and content of "Affiliations" section', async ({ page }) => {
  await page.goto('/'); // Use the full URL

  const affiliationsSection = await page.locator('#affiliations');
  await expect(affiliationsSection).toBeVisible();

  const affiliationAvanade = await page.locator('h3:has-text("Avanade")');
  const affiliationWics = await page.locator('h3:has-text("Women in Computing Society")');
  const affiliationCodePath = await page.locator('h3:has-text("Code Path")');

  await expect(affiliationAvanade).toBeVisible();
  await expect(affiliationWics).toBeVisible();
  await expect(affiliationCodePath).toBeVisible();
});

test('Check presence and content of "About" section', async ({ page }) => {
  await page.goto('/'); // Use the full URL

  const aboutSection = await page.locator('.about');
  await expect(aboutSection).toBeVisible();

  const aboutAcademics = await page.locator('h7:has-text("Academics")');
  const aboutWics = await page.locator('h7:has-text("Women in Computing Society")');
  const aboutFreeTime = await page.locator('h7:has-text("Free Time")');

  await expect(aboutAcademics).toBeVisible();
  await expect(aboutWics).toBeVisible();
  await expect(aboutFreeTime).toBeVisible();
});

test('Check presence and content of "Projects" section', async ({ page }) => {
  await page.goto('/'); // Use the full URL

  const projectsSection = await page.locator('#projects');
  await expect(projectsSection).toBeVisible();

  const projectCosmicClips = await page.locator('h4:has-text("Cosmic Clips")');
  const projectFateOfTheInops = await page.locator('h4:has-text("Fate of the Inops")');

  await expect(projectCosmicClips).toBeVisible();
  await expect(projectFateOfTheInops).toBeVisible();
});

test('Check presence and content of "Other" section', async ({ page }) => {
  await page.goto('/'); // Use the full URL

  const otherSection = await page.locator('.other-section');
  await expect(otherSection).toBeVisible();

  const otherBloomberg = await page.locator('p:has-text("Bloomberg Leadership Workship")');
  const otherGoogle = await page.locator('p:has-text("Google Tour with Rewriting the Code")');
  const otherBiliteracy = await page.locator('p:has-text("Earned the Seal of Biliteracy in Spanish")');

  await expect(otherBloomberg).toBeVisible();
  await expect(otherGoogle).toBeVisible();
  await expect(otherBiliteracy).toBeVisible();
});

test('Check that meta description is correct', async ({ page }) => {
  await page.goto('/'); // Use the full URL

  // Get the meta description content
  const metaDescription = await page.locator('meta[name="description"]').getAttribute('content');

  // Check if the meta description is correct
  await expect(metaDescription).toBe('A portfolio website that serves as a resume for Xitlaly Prado, a student in computer science. Portfolio is portrayed using the Sage archetype;');
});

test('Check presence of "Copyright" text in the footer', async ({ page }) => {
  await page.goto('/'); // Use the full URL

  const copyrightText = await page.locator('.footer p');
  await expect(copyrightText).toBeVisible();
  await expect(copyrightText).toHaveText('Copyright @ 2024 all rights reserved to Xitlaly Prado');
});