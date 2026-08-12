import { LoginPage } from '../pages/LoginPage';

test('has title', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await expect(page).toHaveTitle(/Swag Labs/);
    
});

test('login ok', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');

    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button', { name: /Login/ }).click();
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});

test('login no ok', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');

    await page.getByPlaceholder('Username').fill('locked_out_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button', { name: /Login/ }).click();
    await expect(page.getByText('Epic sadface: Sorry, this user has been locked out.')).toBeVisible();
});


test('contador-carrito-ok', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');

    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button', { name: /Login/ }).click();
    await page.getByTestId('add-to-cart-sauce-labs-backpack').click();
    await expect(page.getByTestId('shopping-cart-badge')).toHaveText('1');
    
});

