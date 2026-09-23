import { test, expect } from '@playwright/test';

// The live storefront no longer includes Azure in the product catalog, so this
// test must match the current set of products instead of a stale hard-coded name.
const products = [
    { name: 'Retro', pattern: /Retro/i },
    { name: 'Vibrant', pattern: /Vibrant/i },
    { name: 'Trek', pattern: /Trek/i },
    { name: 'Urban', pattern: /Urban/i }
];

test.beforeEach(async ({ page }) => {
    await page.goto('https://test.aurazone.shop', { waitUntil: 'domcontentloaded' });
});

for (const product of products) {
    test(`product details ${product.name}`, async ({ page }) => {
        const productLink = page.getByRole('link', { name: new RegExp(`^${product.name}$`, 'i') });

        await expect(productLink).toHaveCount(1);
        await expect(productLink).toBeVisible();
        await productLink.click();

        await expect(page).toHaveURL(/.*product/i);
        await expect(page.getByRole('heading', { name: product.pattern }).first()).toBeVisible();
        await expect(page.locator('h1').first()).toContainText(product.pattern);
    });
}
