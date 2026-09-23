import { test, expect } from '@playwright/test';

const products = [
    { name: 'Azure', pattern: /Azure/i },
    { name: 'Retro', pattern: /Retro/i },
    { name: 'Vibrant', pattern: /Vibrant/i },
    { name: 'Trek', pattern: /Trek/i },
    { name: 'Urban', pattern: /Urban/i }
];

test.beforeEach(async ({ page }) => {
    await page.goto('https://test.aurazone.shop');
});

for (const product of products) {
    test(`product details ${product.name}`, async ({ page }) => {
        await page.getByRole('link', { name: product.pattern }).first().click();
        await expect(page).toHaveURL(/.*product/i);
        await expect(page.getByRole('heading', { name: product.pattern }).first()).toBeVisible();
        await expect(page.locator('h1').first()).toContainText(product.pattern);
    });
}