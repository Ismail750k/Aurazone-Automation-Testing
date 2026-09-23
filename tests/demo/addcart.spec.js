import { test, expect } from '@playwright/test';

test('Add to Cart', async ({ page }) => {
    await page.goto('https://test.aurazone.shop');
    await page.waitForTimeout(3000);
    await page.getByRole('button', { name: /add to cart/i }).first().click();
    await page.waitForTimeout(3000);
    await page.getByRole('button', { name: 'Shopping cart' }).click();
    await page.waitForTimeout(3000);
    await expect(page.getByLabel('Quantity selector').getByText('1')).toBeVisible();
    await page.waitForTimeout(3000);
   
})
