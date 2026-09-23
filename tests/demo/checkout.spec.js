import { test, expect } from '@playwright/test';


test.beforeEach(async ({ page }) => {
    await page.goto('https://test.aurazone.shop/login');
    await page.getByRole('button', { name: 'Email & Password' }).click();
    await page.getByRole('textbox', { name: 'hello@example.com' }).fill('ismail150kp@gmail.com');
    await page.getByRole('textbox', { name: '••••••••' }).fill('Playwright@1z');
    await page.getByRole('button', { name: 'Sign In' }).click();
});

test('Checkout', async ({ page }) => {
    await page.getByRole('button', { name: /add to cart/i }).first().click();
    await page.waitForTimeout(2000);
    await page.getByRole('button', { name: 'Open profile menu' }).click();
    await page.getByRole('button', { name: 'Profile', exact: true }).click();
    await page.getByRole('button', { name: 'Addresses Manage your' }).click();
    await page.waitForTimeout(3000);
    await page.goto('https://test.aurazone.shop/checkout');
    await page.getByRole('button', { name: 'Cash on Delivery Pay when you' }).click();
    await page.getByRole('button', { name: 'Place Order →' }).click();
    await page.waitForTimeout(2000);
    await expect(page.getByRole('heading', { name: 'Order Confirmed!' })).toBeVisible();

})

test('Checkout empty cart', async ({ page }) => {
    await page.goto('https://test.aurazone.shop/checkout');
    await page.waitForTimeout(3000);
    await expect(page.getByText('Your cart is empty')).toBeVisible();
    

})