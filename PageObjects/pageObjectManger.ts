import { Page } from '@playwright/test';
import { LoginPage } from '../PageObjects/loginPage';

export class POManager {
    page: Page;
    loginPage: LoginPage;

    constructor(page: Page) {
        this.page = page;
        this.loginPage = new LoginPage(page);

    }

    getLoginPage() {
        return this.loginPage;
    }
}