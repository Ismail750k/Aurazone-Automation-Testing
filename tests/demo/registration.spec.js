import { test, expect } from '@playwright/test';

test.describe('Aurazone - Signup Journey', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://test.aurazone.shop/signup');
});

test('Existing User Registration', async ({ page }) => {
    await page.getByRole('textbox', { name: '+1 555 000' }).fill('5555555555555555');
    await page.getByRole('textbox', { name: 'hello@example.com' }).fill('smokeyyagb@gmail.com');
    await page.getByRole('textbox', { name: 'Create password' }).fill('Playwright@1Z');
    await page.getByRole('button', { name: 'Get Verification Code' }).click();
    await expect(page.getByText('Account already registered.')).toBeVisible();
    await page.waitForTimeout(3000);
    

})

test('New User Registration', async ({ page }) => {
    await page.getByRole('textbox', { name: '+1 555 000' }).fill('5555555555566566');
    await page.getByRole('textbox', { name: 'hello@example.com' }).fill('admin509@gmail.com');
    await page.getByRole('textbox', { name: 'Create password' }).fill('Playwright@1Z');
    await page.getByRole('button', { name: 'Get Verification Code' }).click();
    await expect(page.getByText('Code has been sent to')).toBeVisible();
    await page.waitForTimeout(3000);

})


test('Password Validation', async ({ page }) => {
    await page.getByRole('textbox', { name: '+1 555 000' }).fill('5555555555555577');
    await page.getByRole('textbox', { name: 'hello@example.com' }).fill('admin509@gmail.com');
    await page.getByRole('textbox', { name: 'Create password' }).fill('playwright');
    await page.getByRole('button', { name: 'Get Verification Code' }).click();
    await expect(page.getByText('Password must include at')).toBeVisible();
    await page.waitForTimeout(3000);
   
})
})