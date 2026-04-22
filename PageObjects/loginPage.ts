import { Page, Locator } from '@playwright/test';

export class LoginPage {
    page: Page;
    userName: Locator;
    password: Locator;
    signInButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.userName = page.locator('#txtUsername');
        this.password = page.locator('#txtPassword');
        this.signInButton = page.locator("[type='submit']");
    }

    async goTo(url) {
        await this.page.goto(url);
    }

    async login(username: string, password: string) {
        await this.userName.fill(username);
        await this.password.fill(password);
        await this.signInButton.click();
    }
}