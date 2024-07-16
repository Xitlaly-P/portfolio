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

test('Check presence of "About" section', async ({ page }) => {
  await page.goto('/');
  const aboutSection = await page.locator('.about');
  await expect(aboutSection).toBeVisible();
});

test('Check presence of "About WICS"', async ({ page }) => {
  await page.goto('/');
  const aboutWics = await page.locator('h7:has-text("Women in Computing Society")');
  await expect(aboutWics).toBeVisible();
});

test('Check presence of "About Academics"', async ({ page }) => {
  await page.goto('/');
  const aboutAcademics = await page.locator('h7:has-text("Academics")');
  await expect(aboutAcademics).toBeVisible();
});

test('Check presence of "About Free Time"', async ({ page }) => {
  await page.goto('/');
  const aboutFreeTime = await page.locator('h7:has-text("Free Time")');
  await expect(aboutFreeTime).toBeVisible();
});

test('Check presence of "Projects" section', async ({ page }) => {
  await page.goto('/');
  const projectsSection = await page.locator('#projects');
  await expect(projectsSection).toBeVisible();
});

test('Check project "Cosmic Clips"', async ({ page }) => {
  await page.goto('/');
  const projectCosmicClips = await page.locator('h4:has-text("Cosmic Clips")');
  await expect(projectCosmicClips).toBeVisible();
});

test('Check project "Fate of the Inops"', async ({ page }) => {
  await page.goto('/');
  const projectFateOfTheInops = await page.locator('h4:has-text("Fate of the Inops")');
  await expect(projectFateOfTheInops).toBeVisible();
});

test('Check presence of "Other" section', async ({ page }) => {
  await page.goto('/');
  const otherSection = await page.locator('.other-section');
  await expect(otherSection).toBeVisible();
});

test('Check "Bloomberg Leadership Workshop" in Other section', async ({ page }) => {
  await page.goto('/');
  const otherBloomberg = await page.locator('p:has-text("Bloomberg Leadership Workship")');
  await expect(otherBloomberg).toBeVisible();
});

test('Check "Google Tour with Rewriting the Code" in Other section', async ({ page }) => {
  await page.goto('/');
  const otherGoogle = await page.locator('p:has-text("Google Tour with Rewriting the Code")');
  await expect(otherGoogle).toBeVisible();
});

test('Check "Seal of Biliteracy in Spanish" in Other section', async ({ page }) => {
  await page.goto('/');
  const otherBiliteracy = await page.locator('p:has-text("Earned the Seal of Biliteracy in Spanish")');
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

test('Check that GitHub link in the footer works', async ({ page, context }) => {
  // Navigate to the page
  await page.goto('/'); // Use the full URL if necessary

  // Locate the GitHub link in the footer
  const githubLink = page.locator('.footer .links a[href="https://github.com/Xitlaly-P"]');
  
  // Ensure the GitHub link is visible
  await expect(githubLink).toBeVisible();

  // Click the GitHub link
  await githubLink.click();

  // Get all pages in the context
  const pages = context.pages();
  
  // The last opened page should be the new page
  const newPage = pages[pages.length - 1];

  // Wait for the new page to load
  await newPage.waitForLoadState('domcontentloaded');

  // Check that the new page URL contains "github.com"
  await expect(newPage.url()).toContain('github.com/Xitlaly-P');
});

test('Check that LinkedIn link in the footer works', async ({ page, context }) => {
  // Navigate to the page
  await page.goto('/'); // Use the full URL if necessary

  // Locate the GitHub link in the footer
  const linkedInLink = page.locator('.footer .links a[href="https://www.linkedin.com/in/xitlalyprado/"]');
  
  // Ensure the GitHub link is visible
  await expect(linkedInLink).toBeVisible();

  // Click the GitHub link
  await linkedInLink.click();

  // Get all pages in the context
  const pages = context.pages();
  
  // The last opened page should be the new page
  const newPage = pages[pages.length - 1];

  // Wait for the new page to load
  await newPage.waitForLoadState('domcontentloaded');

  // Check that the new page URL contains "github.com"
  await expect(newPage.url()).toContain('https://www.linkedin.com/in/xitlalyprado/');
});

test('Check that LinkedIn link in the hero works', async ({ page, context }) => {
  // Navigate to the page
  await page.goto('/'); // Use the full URL if necessary

  // Locate the GitHub link in the footer
  const linkedInLink = page.locator('.hero .hero-text a[href="https://www.linkedin.com/in/xitlalyprado/"]');
  
  // Ensure the GitHub link is visible
  await expect(linkedInLink).toBeVisible();

  // Click the GitHub link
  await linkedInLink.click();

  // Get all pages in the context
  const pages = context.pages();
  
  // The last opened page should be the new page
  const newPage = pages[pages.length - 1];

  // Wait for the new page to load
  await newPage.waitForLoadState('domcontentloaded');

  // Check that the new page URL contains "github.com"
  await expect(newPage.url()).toContain('https://www.linkedin.com/in/xitlalyprado/');
});

test('Check Avanade affiliation card', async ({ page }) => {
  await page.goto('/');
  const card = page.locator('.affil .card').nth(0);
  await expect(card.locator('.card-image img')).toHaveAttribute('alt', 'avanade logo');
  await expect(card.locator('h3')).toHaveText('Avanade');
  await expect(card.locator('p')).toHaveText('Through a mentorship program I learn about the industry and network with people in the company');
});

test('Check Women in Computing Society affiliation card', async ({ page }) => {
  await page.goto('/');
  const card = page.locator('.affil .card').nth(1);
  await expect(card.locator('.card-image img')).toHaveAttribute('alt', 'wics logo');
  await expect(card.locator('h3')).toHaveText('Women in Computing Society');
  await expect(card.locator('p')).toHaveText('As the event coordinator I organize events for over 300 members of women interested in computer science');
});

test('Check Code Path affiliation card', async ({ page }) => {
  await page.goto('/');
  const card = page.locator('.affil .card').nth(2);
  await expect(card.locator('.card-image img')).toHaveAttribute('alt', 'code path logo');
  await expect(card.locator('h3')).toHaveText('Code Path');
  await expect(card.locator('p')).toHaveText('Through this program I take classes to help develop my skills to succeed in technical interviews.');
});

test('Check images in "About" section', async ({ page }) => {
  await page.goto('/');
  const aboutImages = [
    { alt: 'me and other avanade scholarship winners' },
    { alt: 'a wics event' },
    { alt: 'crochet bag that I made' },
  ];
  for (const [index, img] of aboutImages.entries()) {
    const image = page.locator('.about .about-image').nth(index);
    await expect(image).toHaveAttribute('alt', img.alt);
  }
});

test('Check image alt text in Projects section', async ({ page }) => {
  await page.goto('/');

  const projectImages = [
    { selector: '.project-background', alt: 'cosmic clips logo' },
    { selector: '.project-backgroundtwo', alt: 'fate of the inops logo' },
  ];

  for (const img of projectImages) {
    const image = page.locator(img.selector);
    await expect(image).toHaveAttribute('alt', img.alt);
  }
});

test('Check image alt text in Hero section', async ({ page }) => {
  await page.goto('/');

  // Locate the hero image
  const heroImage = page.locator('.hero .hero-image');

  // Check the alt attribute of the hero image
  await expect(heroImage).toHaveAttribute('alt', 'Xitlaly Prado');
});