import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

const invalidCases = [
    { username: '', password: 'secret_sauce', expectedMessage: 'Epic sadface: Username is required' },
    { username: 'standard_user', password: '', expectedMessage: 'Epic sadface: Password is required' },
    { username: 'invalid_user', password: 'secret_sauce', expectedMessage: 'Epic sadface: Username and password do not match any user in this service'},
]

for (const testCase of invalidCases) {
    test(`login fails with username="${testCase.username}" password="${testCase.password}"`, async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login(testCase.username, testCase.password);
        await expect(page.getByText(testCase.expectedMessage)).toBeVisible();
    })
}