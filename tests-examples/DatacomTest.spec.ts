import { test, expect } from '@playwright/test';

test('Ecommerce', async ({ page }) => {
  await page.goto('https://qa-practice.netlify.app/auth_ecommerce');
  await page.getByRole('textbox', { name: 'Email' }).fill('admin@admin.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'ADD TO CART' }).first().click();
  await page.getByRole('button', { name: 'PROCEED TO CHECKOUT' }).click();
  await page.getByRole('textbox', { name: 'Enter phone number' }).fill('0120495513');
  await page.getByRole('textbox', { name: 'Little Streets' }).click();
  await page.getByRole('textbox', { name: 'Little Streets' }).fill('29 Birkinshaw grove, Riverstone Terrace, Upperhutt');
  await page.getByRole('textbox', { name: 'London' }).fill('Wellington');
  await page.locator('#countries_dropdown_menu').selectOption('New Zealand');
  await page.getByRole('button', { name: 'Submit Order' }).click();
  await page.getByText('Congrats! Your order of $905.').click();
  await expect(page.locator('#message')).toContainText('Congrats! Your order of $905.99 has been registered and will be shipped to 29 Birkinshaw grove, Riverstone Terrace, Upperhutt, Wellington - New Zealand.');
  await page.getByRole('link', { name: 'Log Out' }).click();
});

test('test', async ({ page }) => {
  await page.goto('https://qa-practice.netlify.app/products_list');
  await page.getByRole('button', { name: 'ADD TO CART' }).first().click();
  await page.getByText('Apple iPhone 12, 128GB, Black').first().click();
  await page.getByText('Apple iPhone 12, 128GB, Black').first().click();
  await page.locator('#prooood div').filter({ hasText: 'Total $' }).locator('span').click();
  await page.getByRole('button', { name: 'PURCHASE' }).click();
  await page.getByText('Congrats! Your order of $905.').click();
  await page.getByText('$').click();
  await page.getByText('Congrats! Your order of $905.').click();
  await page.getByText('Congrats! Your order of $905.').click();
  await page.getByRole('link', { name: 'Go back to products list' }).click();
});

test('visual', async ({ page }) => {

    await page.goto("https://qa-practice.netlify.app/visual")
    expect(await page.screenshot()).toMatchSnapshot('landing.gif')
    })

//FORMS

test('Login', async ({ page }) => {
  await page.goto('https://qa-practice.netlify.app/auth_ecommerce');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('admin@admin.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Submit' }).click();
});


test('Register', async ({ page }) => {
  await page.goto('https://qa-practice.netlify.app/register');
  await page.getByRole('textbox', { name: 'First Name' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill('vijaya');
  await page.getByRole('textbox', { name: 'First Name' }).press('Tab');
  await page.getByRole('textbox', { name: 'Last Name Phone number Country' }).fill('palleti');
  await page.getByRole('textbox', { name: 'Last Name Phone number Country' }).press('Tab');
  await page.getByRole('textbox', { name: 'Enter phone number' }).fill('0210495513');
  await page.getByRole('textbox', { name: 'Enter phone number' }).press('Tab');
  await page.locator('#countries_dropdown_menu').selectOption('New Zealand');
  await page.getByRole('textbox', { name: 'Enter email' }).click();
  await page.getByRole('textbox', { name: 'Enter email' }).fill('vjkiwi@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('1234vj');
  await page.getByRole('checkbox', { name: 'I agree with the terms and' }).check();
  await page.getByRole('button', { name: 'Register' }).click();
  await page.getByText('The account has been').click();
  await expect(page.locator('#message')).toContainText('The account has been successfully created!');
  });

test('Recover Email', async ({ page }) => {
  await page.goto('https://qa-practice.netlify.app/recover-password');
  await page.getByRole('textbox', { name: 'Please enter your email' }).click();
  await page.getByRole('textbox', { name: 'Please enter your email' }).fill('vjkiwi@gmail.com');
  await page.getByRole('button', { name: 'Recover Password' }).click();
  await page.getByText('An email with the new').click();
  await expect(page.locator('#message')).toContainText('An email with the new password has been sent to vjkiwi@gmail.com. Please verify your inbox!');
});
test('checkbox', async ({ page }) => {
  await page.goto('https://qa-practice.netlify.app/checkboxes');
  await page.locator('#checkbox1').check();
  await expect(page.locator('#checkbox1')).toBeVisible();
  await page.locator('#checkbox2').check();
  await expect(page.locator('#checkbox2')).toBeVisible();
  await page.locator('#checkbox3').check();
  await expect(page.locator('#checkbox3')).toBeVisible();
  await page.getByRole('button', { name: 'Reset' }).click();
});

test('Radio Button', async ({ page }) => {
  await page.goto('https://qa-practice.netlify.app/radiobuttons');
  await page.getByRole('radio', { name: 'Radio button 1' }).check();
  await expect(page.getByRole('radio', { name: 'Radio button 1' })).toBeVisible();
  await page.getByRole('radio', { name: 'Radio button 2' }).check();
  await expect(page.getByRole('radio', { name: 'Radio button 2' })).toBeVisible();
  await page.getByRole('radio', { name: 'Radio button 3' }).check();
  await expect(page.getByRole('radio', { name: 'Radio button 3' })).toBeVisible();
  await expect(page.getByText('Radio button 4 - disabled')).toBeVisible();
  await expect(page.getByText('Home Contact Radio buttons')).toBeVisible();
});

test('Switch to a new Tab', async ({ page }) => {
  await page.goto('https://qa-practice.netlify.app/tab');
  await page.getByRole('heading', { name: 'Switch to a new Browser Tab' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Press me - New Tab' }).click();
  const page1 = await page1Promise;
  await page1.getByRole('heading', { name: 'Table Example' }).click();
  await page1.getByRole('rowheader', { name: '1' }).click();
  await expect(page1.locator('tbody')).toContainText('Mark');
});

test('Swith to a new Browser Window', async ({ page }) => {
  await page.goto('https://qa-practice.netlify.app/window');
  await expect(page.locator('h2')).toContainText('Switch to a new Browser Window');
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('button', { name: 'Press me - New Window' }).click();
  const page1 = await page1Promise;
  await expect(page1.locator('h2')).toContainText('Table Example');
  await expect(page1.locator('tbody')).toContainText('jacob_t@yahoo.com');
});