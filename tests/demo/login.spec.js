import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://test.aurazone.shop/login');
    await page.getByRole('button', { name: 'Email & Password' }).click();
});


test('Valid Login', async ({ page }) => {
    await page.getByRole('textbox', { name: 'hello@example.com' }).fill('ismail150kp@gmail.com');
    await page.getByRole('textbox', { name: '••••••••' }).fill('Playwright@1z');
    await page.getByRole('button', { name: 'Sign In' }).click();

    await expect(page.getByRole('button', { name: 'Open profile menu' })).toBeVisible({ timeout: 20000 });
    await page.getByRole('button', { name: 'Open profile menu' }).click();
    await page.getByRole('button', { name: 'Profile', exact: true }).click();
    await expect(page.getByText('Welcome back')).toBeVisible({ timeout: 20000 });
})

test('Invalid Login', async ({ page }) => {
    await page.getByRole('textbox', { name: 'hello@example.com' }).fill('ismaill150kp@gmail.com');
    await page.getByRole('textbox', { name: '••••••••' }).fill('Playwright@1z');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await expect(page.getByText('Invalid email or password')).toBeVisible({ timeout: 20000 });
    
});
