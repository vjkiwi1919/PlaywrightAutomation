const { test, expect, request } = require('@playwright/test');
const {ToysPage} = require('../pageObject/ToysPage')

test.only('Test Case 1', async ({ page }) => {
   
   // await page.goto("http://jupiter.cloud.planittesting.com");
   
    // console.log(await page.title())
    // await expect(page.locator("small.muted")).toHaveText(" toys, games, puzzles, art and craft, novelties, teddy bears, bicycles, kites, models, sports, gifts... ");

   const toysPage = new ToysPage(page)
   toysPage.goTo();
   toysPage.navigateToContact();
   //toysPage.checkValidation()
   
  
    //await expect(page.locator('#header-message')).toContainText('We welcome your feedback - but we won\'t get it unless you complete the form correctly.');
    // await page.locator("#forename").fill('vJ');   
    // await page.locator("[name='email']").fill('john@gmail.com');
    // await page.getByRole('textbox', { name: 'Telephone' }).fill('123232424242');
    // await page.locator("[placeholder='Tell us about it..']").fill('test automation');
    // await page.getByText('We welcome your feedback -').click();
    // await expect(page.locator('#header-message')).toContainText('We welcome your feedback - tell it how it is.');
});

test.skip('Test Case ', async ({ page }) => {
   

    await page.goto("https://jupiter.cloud.planittesting.com/#/contact");
       await page.locator("#forename").fill('Vijay');   
    await page.locator("[name='email']").fill('john@gmail.com');   
    await page.locator("[placeholder='Tell us about it..']").fill('Execute Test Case 2');
    await page.getByRole('link', { name: 'Submit' }).click();
    await page.waitForLoadState('networkidle',{ timeout: 60000 });
    await expect(page.locator('body'),{ timeout: 60000 }).toContainText('Thanks vijay, we appreciate your feedback.');
    // await page.getByText('We welcome your feedback -').click();
   // await expect(page.locator('#header-message')).toContainText('We welcome your feedback - tell it how it is.');
});

test('Test Case 2', async ({ page }) => {
    await page.goto('https://jupiter.cloud.planittesting.com/#/contact');
    await page.getByRole('textbox', { name: 'Forename *' }).fill('Vijay');
    await page.getByRole('textbox', { name: 'Email *' }).fill('vijay@gmail.com');
    await page.getByRole('textbox', { name: 'Message *' }).fill('test automation');
    
    await page.getByRole('link', { name: 'Submit' }).click();
    await page.waitForLoadState('networkidle',{ timeout: 30000 })
    await expect(page.locator('body')).toContainText('Thanks Vijay, we appreciate your feedback.');
  });
  test('Test Case 3', async ({ page }) => {
  await page.goto('https://jupiter.cloud.planittesting.com/');
  await page.getByRole('link', { name: 'Shop', exact: true }).click();
  await expect(page.locator('#product-2')).toContainText('Stuffed Frog');
  await page.locator('#product-2').getByRole('link', { name: 'Buy' }).click();
  await expect(page.getByRole('link', { name: 'Cart (1)' })).toBeVisible();
  await page.locator('#product-2').getByRole('link', { name: 'Buy' }).click();
  await expect(page.getByRole('link', { name: 'Cart (2)' })).toBeVisible();
  await expect(page.locator('#product-4')).toContainText('Fluffy Bunny');
  await page.locator('#product-4').getByRole('link', { name: 'Buy' }).click();
  await page.locator('#product-4').getByRole('link', { name: 'Buy' }).click();
  await page.locator('#product-4').getByRole('link', { name: 'Buy' }).click();
  await page.locator('#product-4').getByRole('link', { name: 'Buy' }).click();
  await page.locator('#product-4').getByRole('link', { name: 'Buy' }).click();
  await expect(page.locator('#product-7')).toContainText('Valentine Bear');
  await page.locator('#product-7').getByRole('link', { name: 'Buy' }).click();
  await page.locator('#product-7').getByRole('link', { name: 'Buy' }).click();
  await page.locator('#product-7').getByRole('link', { name: 'Buy' }).click();
  await expect(page.getByRole('link', { name: 'Cart (10)' })).toBeVisible();
  await page.getByRole('link', { name: 'Cart (10)' }).click();
  await expect(page.getByRole('row', { name: 'Stuffed Frog $10.99 2 $' }).getByRole('spinbutton')).toHaveValue('2');
  await page.getByRole('cell', { name: '$21.98' }).click();
  await expect(page.getByRole('row', { name: 'Fluffy Bunny $9.99 5 $' }).getByRole('spinbutton')).toHaveValue('5');
  await page.getByRole('cell', { name: '$49.95' }).click();
  await expect(page.getByRole('cell', { name: '3' }).getByRole('spinbutton')).toHaveValue('3');
  await page.getByRole('cell', { name: '$44.97' }).click();
  await expect(page.getByRole('strong')).toContainText('Total: 116.9');  
  })