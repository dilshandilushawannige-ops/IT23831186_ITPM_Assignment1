const { test, expect } = require('@playwright/test');

test('Neg_Fun_0001 - Joined words without spaces', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  await page.locator('textarea').fill('mamapansalyanavaa');

  const outputLocator = page.locator('div.whitespace-pre-wrap').nth(1);

  await page.waitForTimeout(2000);

  const output = await outputLocator.innerText();


  if (output.trim() !== '') {
    expect(output).toMatch(/[අ-ෆ]/);
    expect(output).not.toContain(' ');
  }
});

test('Neg_Fun_0002 - Multiple spaces in input', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  await page.locator('textarea').fill('mama       naanavaa');

  const outputLocator = page.locator('div.whitespace-pre-wrap').nth(1);

  
  await page.waitForTimeout(2000);

  const output = await outputLocator.innerText();

  if (output.trim() !== '') {
    expect(output).toMatch(/[අ-ෆ]/);
  }
});



test('Neg_Fun_0003 - Typo in Singlish input', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  await page
    .locator('textarea')
    .fill('api charikavak yamuda?');

  const outputLocator = page.locator('div.whitespace-pre-wrap').nth(1);

  
  await page.waitForTimeout(2000);

  const output = await outputLocator.innerText();

  
  if (output.trim() !== '') {
    expect(output).toMatch(/[අ-ෆ]/);
    expect(output).toContain('?');
  }
});


test('Neg_Fun_0004 - Typo and special character handling', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  await page
    .locator('textarea')
    .fill('api vaedata  @ yanavaa');

  const outputLocator = page.locator('div.whitespace-pre-wrap').nth(1);


  await page.waitForTimeout(2000);

  const output = await outputLocator.innerText();

  
  if (output.trim() !== '') {
   
    expect(output).toMatch(/[අ-ෆ]/);

    expect(output).not.toContain('@');
  }
});

test('Neg_Fun_0005 - Informal sentence with number', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  await page.locator('textarea').fill('mama 2ta adha yanavaa.');

  const outputLocator = page.locator('div.whitespace-pre-wrap').nth(1);

  await page.waitForTimeout(2000);

  const output = await outputLocator.innerText();

  if (output.trim() !== '') {

    expect(output).toMatch(/[අ-ෆ]/);

    expect(output).toMatch(/\d/);
  }
});

test('Neg_Fun_0006 - Informal sentence with number', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  await page.locator('textarea').fill('para vahala unath api paasal yanna epyi.');

  const outputLocator = page.locator('div.whitespace-pre-wrap').nth(1);

  await page.waitForTimeout(2000);

  const output = await outputLocator.innerText();

 
  if (output.trim() !== '') {
    
    expect(output).toMatch(/[අ-ෆ]/);

    expect(output).toContain('පාසල්');
  }
});



test('Neg_Fun_0007 - Informal sentence with number', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  await page.locator('textarea').fill('mama class ekata late venva');

  const outputLocator = page.locator('div.whitespace-pre-wrap').nth(1);

  await page.waitForTimeout(2000);

  const output = await outputLocator.innerText();

  if (output.trim() !== '') {

    expect(output).toMatch(/[අ-ෆ]/);

    expect(output).toContain('class');
    expect(output).toContain('late');

    expect(output).toContain('එකට');
  }
});

test('Neg_Fun_0008 - Informal sentence with number', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

    await page.locator('textarea').fill(
    `api chiththrapatayak balanna yanavaa.

oyaa?`
  );
  const outputLocator = page.locator('div.whitespace-pre-wrap').nth(1);

  await page.waitForTimeout(2000);

  const output = await outputLocator.innerText();


  if (output.trim() !== '') {

    expect(output).toMatch(/[අ-ෆ]/);

    expect(output).toContain('\n');
  }
});

test('Neg_Fun_0009 - Informal sentence with number', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  await page.locator('textarea').fill('oyaa kaeevadha!!!');

  const outputLocator = page.locator('div.whitespace-pre-wrap').nth(1);

  
  await page.waitForTimeout(2000);

  const output = await outputLocator.innerText();

  
  if (output.trim() !== '') {
    
    expect(output).toMatch(/[අ-ෆ]/);

    expect(output).toContain('!!!');
  }
});

test('Neg_Fun_0010 - Informal sentence with number', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  await page.locator('textarea').fill('adha tomgee aluth rasaave paLaveni davasa. eyaa udheema naegitalaa hariyata sadhdha naethuva laeesthi venavaa. gedharin pitath vedhdhii, eyata loku sathutak vageema podi bayakuth dhaenenavaa. tomgee ofis ekata giyaama, loku husmak aragena dhora arinava. haema dheyakma eyaata aluth—minissu, shabdhaya, saha eyaa vatee thiyena idakada. eekee vadakran kenek hinaavelaa eyaava piLigannavaa. tomgee eyaagee vaeda hemin saha parissamin patan gannavaa. dhavasa ivara vedhdhii, eyaata mahansiyak dhaenunath loku aBhimaanayak dannenava.');

  const outputLocator = page.locator('div.whitespace-pre-wrap').nth(1);

  
  await page.waitForTimeout(2000);

  const output = await outputLocator.innerText();

  
  if (output.trim() !== '') {
    
    expect(output).toMatch(/[අ-ෆ]/);

    expect(output.length).toBeGreaterThan(50);
  }
});




