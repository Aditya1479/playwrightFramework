import { test, expect } from '@playwright/test';
import { POManager } from '../pageObjects/pageObjectManger';
// @ts-ignore
import testData from "../utils/testData.json";

test.describe('E2E Test', () => {

    test('Login and Add Product to Cart', async ({ page }) => {

        const poManager = new POManager(page);
        const loginPage = poManager.getLoginPage();
        await loginPage.goTo("/");
        await loginPage.login(testData.username, testData.password);
        await page.pause();

    });

});