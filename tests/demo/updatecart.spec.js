import { test, expect } from '@playwright/test';

test('Add to Cart and Remove from Cart', async ({ page }) => {
    await page.goto('https://test.aurazone.shop');
    await page.waitForTimeout(3000);
    await page.getByRole('button', { name: /add to cart/i }).first().click();
    await page.waitForTimeout(3000);
    await page.getByRole('button', { name: 'Shopping cart' }).click();
    await page.waitForTimeout(3000);
    await page.getByRole('button', { name: 'Remove from cart' }).click();
    await page.waitForTimeout(3000);
    await expect(page.getByRole('heading', { name: 'Your cart is empty' })).toBeVisible();
    await page.waitForTimeout(3000);
    

})








