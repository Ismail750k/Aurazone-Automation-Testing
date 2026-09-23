import { test, expect } from '@playwright/test';


test.beforeEach(async ({ page }) => {
    await page.goto('https://test.aurazone.shop');
});

test('Search with a valid matching keyword', async ({ page }) => {
    await page.getByRole('button', { name: 'Open search' }).click();
    await page.getByRole('textbox', { name: 'Search shoes by name, brand...' }).fill('retro');
    await page.getByRole('button', { name: 'Search', exact: true }).click();
    await expect(page.getByText('products found')).toBeVisible({ timeout: 2000 });
   

})

test('Search with a non-existent keyword', async ({ page }) => {
    await page.getByRole('button', { name: 'Open search' }).click();
    await page.getByRole('textbox', { name: 'Search shoes by name, brand...' }).fill('XYZ999NonExistent');
    await page.getByRole('button', { name: 'Search', exact: true }).click();
    await expect(page.getByRole('heading', { name: 'No products found' })).toBeVisible({ timeout: 2000 });

})
