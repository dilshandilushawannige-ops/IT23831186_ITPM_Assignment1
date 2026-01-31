const { test, expect } = require('@playwright/test');

test('Pos_Fun_0001', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.locator('textarea').fill('api pansal yanavaa.');

  const outputLocator = page.locator('div.whitespace-pre-wrap').first();
  await expect(outputLocator).toHaveText(/.+/);

  const output = await outputLocator.innerText();
  expect(output).toContain('පන්සල');
});


test('Pos_Fun_0002 ', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  await page
    .locator('textarea')
    .fill('api pansal yanavaa saha passe perahaera balanavaa');

  const outputLocator = page.locator('div.whitespace-pre-wrap').first();
  await expect(outputLocator).toHaveText(/.+/);

  const output = await outputLocator.innerText();

 
  expect(output).toContain('පන්සල්');
  expect(output).toContain('පෙරහැර');
});


test('Pos_Fun_0003 ', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  await page
    .locator('textarea')
    .fill('oyaa "suBha upan dhinayak veevaa!" kiyalaa kivuvadha?');

  const outputLocator = page.locator('div.whitespace-pre-wrap').first();
  await expect(outputLocator).toHaveText(/.+/);

  const output = await outputLocator.innerText();

  
  expect(output).toContain('සුභ උපන් දිනයක් වේවා');


  expect(output).toContain('!');
  expect(output).toContain('?');
});


test('Pos_Fun_0004 ', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  await page
    .locator('textarea')
    .fill(
      'apee vaedasatahana parakku unee kaalaya kaLamaNaakaraNaya karaganna baeriuna nisaa.'
    );

  const outputLocator = page.locator('div.whitespace-pre-wrap').first();
  await expect(outputLocator).toHaveText(/.+/);

  const output = await outputLocator.innerText();


  expect(output).toContain('වැඩසටහන');
  expect(output).toContain('නිසා');
});

test('Pos_Fun_0005 ', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  await page
    .locator('textarea')
    .fill('mata oyaalayi gedharata yanavidhiya kiyanavadha?');

  const outputLocator = page.locator('div.whitespace-pre-wrap').first();
  await expect(outputLocator).toHaveText(/.+/);

  const output = await outputLocator.innerText();

  
  expect(output).toContain('ගෙදරට');
  expect(output).toContain(' කියනවද?');
});

test('Pos_Fun_0006 ', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  await page
    .locator('textarea')
    .fill('vahaama naegitinna.');

  const outputLocator = page.locator('div.whitespace-pre-wrap').first();
  await expect(outputLocator).toHaveText(/.+/);

  const output = await outputLocator.innerText();

  
  expect(output).toContain('වහාම');
 
});

test('Pos_Fun_0007 ', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  await page
    .locator('textarea')
    .fill('mama iiyee sapaththu dhekak gaththaa.');

  const outputLocator = page.locator('div.whitespace-pre-wrap').first();
  await expect(outputLocator).toHaveText(/.+/);

  const output = await outputLocator.innerText();

  
  expect(output).toContain('ගත්තා');
  expect(output).toContain('සපත්තු');
 
});

test('Pos_Fun_0008 ', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  await page
    .locator('textarea')
    .fill('mama labana sathiyee rata yanavaa');

  const outputLocator = page.locator('div.whitespace-pre-wrap').first();
  await expect(outputLocator).toHaveText(/.+/);

  const output = await outputLocator.innerText();

  
  expect(output).toContain('ලබන');
  expect(output).toContain('රට');
 
});

test('Pos_Fun_0009 - Past tense with objects', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/', {
    timeout: 60000,
    waitUntil: 'domcontentloaded',
  });

  await page
    .locator('textarea')
    .fill('mama iiyee sapaththu dhekak gaththaa.');

  const outputLocator = page.locator('div.whitespace-pre-wrap').first();

  
  await expect.poll(
    async () => (await outputLocator.innerText()).trim().length,
    { timeout: 20000 }
  ).toBeGreaterThan(0);

  const output = await outputLocator.innerText();

  expect(output).toContain('ගත්තා');
  expect(output).toContain('සපත්තු');
});


test('Pos_Fun_0010 ', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  await page
    .locator('textarea')
    .fill('oyalaa heta yanavadha?');

  const outputLocator = page.locator('div.whitespace-pre-wrap').first();
  await expect(outputLocator).toHaveText(/.+/);

  const output = await outputLocator.innerText();

  
  expect(output).toContain('ඔයලා');
  expect(output).toContain('යනවද');
 
});

test('Pos_Fun_0011 ', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  await page
    .locator('textarea')
    .fill('suba upandhinak!');

  const outputLocator = page.locator('div.whitespace-pre-wrap').first();
  await expect(outputLocator).toHaveText(/.+/);

  const output = await outputLocator.innerText();

  
  expect(output).toContain('සුබ');
  expect(output).toContain('උපන්දිනක්');
  expect(output).toContain('!');
 
});


test('Pos_Fun_0012 ', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  await page
    .locator('textarea')
    .fill('karuNaakarakara mata paduvee inna dhenna.');

  const outputLocator = page.locator('div.whitespace-pre-wrap').first();
  await expect(outputLocator).toHaveText(/.+/);

  const output = await outputLocator.innerText();

  
  expect(output).toContain('කරුණාකරකර');
  expect(output).toContain('පඩුවේ');
  expect(output).toContain('මට');
 
});


test('Pos_Fun_0013 ', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  await page
    .locator('textarea')
    .fill('mama bath kanavaa');

  const outputLocator = page.locator('div.whitespace-pre-wrap').first();
  await expect(outputLocator).toHaveText(/.+/);

  const output = await outputLocator.innerText();

  
  expect(output).toContain('බත්');
  expect(output).toContain('කනවා');
 
});

test('Pos_Fun_0014 ', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  await page
    .locator('textarea')
    .fill('biima bonna.');

  const outputLocator = page.locator('div.whitespace-pre-wrap').first();
  await expect(outputLocator).toHaveText(/.+/);

  const output = await outputLocator.innerText();

  
  expect(output).toContain('බීම');
  expect(output).toContain('බොන්න');
 
});

test('Pos_Fun_0015 ', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  await page
    .locator('textarea')
    .fill('hari hari mama ennam.');

  const outputLocator = page.locator('div.whitespace-pre-wrap').first();
  await expect(outputLocator).toHaveText(/.+/);

  const output = await outputLocator.innerText();

  expect(output).toContain('හරි');
  expect(output).toContain('හරි');
 
});


test('Pos_Fun_0016 ', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  await page
    .locator('textarea')
    .fill('thaaththaa car ekee kandy yanna hadhannee.');

  const outputLocator = page.locator('div.whitespace-pre-wrap').first();
  await expect(outputLocator).toHaveText(/.+/);

  const output = await outputLocator.innerText();

  expect(output).toContain('තාත්තා');
  expect(output).toContain('car');
  expect(output).toContain('kandy');
 
});

test('Pos_Fun_0017 ', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  await page
    .locator('textarea')
    .fill('mulin data on karanna. iita passe app ekata log venna.');

  const outputLocator = page.locator('div.whitespace-pre-wrap').first();
  await expect(outputLocator).toHaveText(/.+/);

  const output = await outputLocator.innerText();

  expect(output).toContain('data');
  expect(output).toContain('on');
  expect(output).toContain('app');
  expect(output).toContain('log');
  expect(output).toContain('ඊට');
  expect(output).toContain('පස්සෙ');
 
});


test('Pos_Fun_0018 ', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  await page
    .locator('textarea')
    .fill('bank card eka  tap karanna.');

  const outputLocator = page.locator('div.whitespace-pre-wrap').first();
  await expect(outputLocator).toHaveText(/.+/);

  const output = await outputLocator.innerText();

  expect(output).toContain('card');
  expect(output).toContain('tap');
 
});

test('Pos_Fun_0019 ', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  await page
    .locator('textarea')
    .fill('mama oyaata Rs. 10000 k Nayayi.');

  const outputLocator = page.locator('div.whitespace-pre-wrap').first();
  await expect(outputLocator).toHaveText(/.+/);

  const output = await outputLocator.innerText();

  expect(output).toContain('Rs.');
  expect(output).toContain('10000');
  expect(output).toContain('ණයයි');
 
});


test('Pos_Fun_0020 ', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  await page
    .locator('textarea')
    .fill('අද 10.45 AM class.');

  const outputLocator = page.locator('div.whitespace-pre-wrap').first();
  await expect.poll(
    async () => (await outputLocator.innerText()).trim().length,
    { timeout: 20000 }
  ).toBeGreaterThan(0)

  const output = await outputLocator.innerText();

  expect(output).toContain('අද');
  expect(output).toContain('10.45');
  expect(output).toContain('AM');
  expect(output).toContain('class');
 
});


test('Pos_Fun_0021 ', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  await page
    .locator('textarea')
    .fill('avasan dhinaya 2020.12.3');

  const outputLocator = page.locator('div.whitespace-pre-wrap').first();
  await expect(outputLocator).toHaveText(/.+/);

  const output = await outputLocator.innerText();

  expect(output).toContain('අවසන්');
  expect(output).toContain('දිනය');
  expect(output).toContain('2020.12.3');
 
});


test('Pos_Fun_0022 ', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  await page
    .locator('textarea')
    .fill('mata parippu 2kg dhenna.');

  const outputLocator = page.locator('div.whitespace-pre-wrap').first();
  await expect(outputLocator).toHaveText(/.+/);

  const output = await outputLocator.innerText();

  expect(output).toContain('පරිප්පු');
  expect(output).toContain('2kg');
 
});

test('Pos_Fun_0023', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/', {
    timeout: 60000,
    waitUntil: 'domcontentloaded',
  });

  await page.locator('textarea').fill(`
adha tomgee aluth rasaave paLaveni davasa. eyaa udheema naegitalaa hariyata sadhdha naethuva laeesthi venavaa. gedharin pitath vedhdhii, eyata loku sathutak vageema podi bayakuth dhaenenavaa. tomgee ofis ekata giyaama, loku husmak aragena dhora arinava. haema dheyakma eyaata aluth—minissu, shabdhaya, saha eyaa vatee thiyena idakada. eekee vadakran kenek hinaavelaa eyaava piLigannavaa. tomgee eyaagee vaeda hemin saha parissamin patan gannavaa. dhavasa ivara vedhdhii, eyaata mahansiyak dhaenunath loku aBhimaanayak dannenava.
`);

  const outputLocator = page.locator('div.whitespace-pre-wrap').first();

  await expect.poll(
    async () => (await outputLocator.innerText()).trim().length,
    { timeout: 30000 }
  ).toBeGreaterThan(0);

  const output = await outputLocator.innerText();

  expect(output).toMatch(/[අ-ෆ]/);
  expect(output.length).toBeGreaterThan(100);
});


test('Pos_Fun_0024 ', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  await page
    .locator('textarea')
    .fill('mata SMS ekak evanna.');

  const outputLocator = page.locator('div.whitespace-pre-wrap').first();
  await expect(outputLocator).toHaveText(/.+/);

  const output = await outputLocator.innerText();

  expect(output).toContain('SMS');
  expect(output).toContain('එකක්');
 
});

