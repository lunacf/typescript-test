import { Page, Locator } from '@playwright/test';

export class RegistrationPage {
    private page: Page;
    private inputFullName: Locator;
    private inputDocumentId: Locator;
    private inputEmail: Locator;
    private birthDate: Locator;
    private submitButton: Locator;
    private errorMessage: Locator;
    private successMessage: Locator;

    constructor(page: Page){
        this.page = page;
        this.inputFullName = page.getByTestId('input-full-name');
        this.inputDocumentId = page.getByTestId('input-document-id');
        this.inputEmail = page.getByTestId('input-email');
        this.birthDate = page.getByTestId('input-birth-date');
        this.submitButton = page.getByTestId('submit-button');
        this.errorMessage = page.getByTestId('error-message');
        this.successMessage = page.getByTestId('success-message');
    }

    async goto(){
        await this.page.goto('http://localhost:3000');
    }

    async fillForm(fullName: string, documentId: string, email: string, birth: string){
        await this.inputFullName.fill(fullName);
        await this.inputDocumentId.fill(documentId);
        await this.inputEmail.fill(email);
        await this.birthDate.fill(birth);
    }

    async submit(){
        await this.submitButton.click()
    }

    /* returning an object (Locator) saved */
    
    getErrorMessage(): Locator {
        return this.errorMessage;
    }
    
    getSuccessMessage(): Locator {
        return this.successMessage;
    }
}