import { test, expect } from '@playwright/test';


test.beforeEach(async ({ page }) => {
    await page.goto('https://test.aurazone.shop/login');
    await page.getByRole('button', { name: 'Email & Password' }).click();
    await page.getByRole('textbox', { name: 'hello@example.com' }).fill('ismail150kp@gmail.com');
    await page.getByRole('textbox', { name: '••••••••' }).fill('Playwright@1z');
    await page.getByRole('button', { name: 'Sign In' }).click();
});

test('Standard Logout Flow', async ({ page }) => {
    await page.getByRole('button', { name: 'Open profile menu' }).click();
    await page.getByRole('button', { name: 'Profile', exact: true }).click();
    await page.getByRole('button', { name: 'Sign Out' }).click();
    await page.waitForTimeout(3000);
    await page.getByRole('button', { name: 'Open profile menu' }).click();
    await page.getByRole('button', { name: 'Profile', exact: true }).click();
    await page.waitForTimeout(3000);
    await expect(page.getByRole('heading', { name: 'Profile Access Required' })).toBeVisible();
    await page.waitForTimeout(3000);
    

})
test('Prevent Session Access via Back Button', async ({ page }) => {
    await page.getByRole('button', { name: 'Open profile menu' }).click();
    await page.getByRole('button', { name: 'Profile', exact: true }).click();
    await page.getByRole('button', { name: 'Sign Out' }).click();
    await page.waitForTimeout(3000);
    await page.goto('https://test.aurazone.shop/profile');
    await expect(page.getByRole('heading', { name: 'Profile Access Required' })).toBeVisible();



})