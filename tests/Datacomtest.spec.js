import { test, expect } from '@playwright/test';

test.only('Ecommerce', async ({ page }) => {
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