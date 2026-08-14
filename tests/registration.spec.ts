import { test, expect } from '@playwright/test';
import { RegistrationPage } from '../pages/RegistrationPage';

const invalidCases = [
  {
    description: 'empty full name',
    fullName: '',
    documentId: '12345678',
    email: 'test@test.com',
    birth: '1990-05-20',
    expectedError: 'Full name is required',
  },
  {
    description: 'document ID with letters',
    fullName: 'Carlos Luna',
    documentId: 'abc123',
    email: 'test@test.com',
    birth: '1990-05-20',
    expectedError: 'Document ID must be 7 or 8 digits',
  },
  {
    description: 'invalid email format',
    fullName: 'Carlos Luna',
    documentId: '12345678',
    email: 'not-an-email',
    birth: '1990-05-20',
    expectedError: 'Invalid email format',
  },
];

for (const testCase of invalidCases) {
  test(`registration fails with ${testCase.description}`, async ({ page }) => {
    const registrationPage = new RegistrationPage(page);
    await registrationPage.goto();
    await registrationPage.fillForm(testCase.fullName, testCase.documentId, testCase.email, testCase.birth);
    await registrationPage.submit();
    await expect(registrationPage.getErrorMessage()).toHaveText(testCase.expectedError);
  });
}

test('registration succeeds with valid data', async ({ page }) => {
  const registrationPage = new RegistrationPage(page);
  await registrationPage.goto();
  await registrationPage.fillForm('Pedro Ramirez', '1213142354', 'pedror@test.com', '1999-07-21');
  await registrationPage.submit();
  await expect(registrationPage.getSuccessMessage()).toHaveText('Registration successful!')
});