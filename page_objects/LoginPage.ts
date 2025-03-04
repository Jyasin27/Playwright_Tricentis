import { Locator, Page } from "@playwright/test";
import { AbstractPage } from "./AbstractPage";
import { expect } from "playwright/test";

export class LoginPage extends AbstractPage{

    readonly emailField: Locator
    readonly passwordField: Locator
    readonly loginBtn: Locator
    readonly emailDisplay: Locator
    readonly username: string
    

    constructor(page: Page, username:string) {
        super(page)
        this.username = username
        this.emailField = page.locator("#Email")
        this.passwordField = page.locator("#Password")
        this.loginBtn = page.locator(".login-button")
        
        // Using a dynamic XPath for the email display
        this.emailDisplay = page.locator(`//a[text()='${this.username}']`);
    }

    async login(username, password) {

        await expect(this.emailField).toBeVisible()
        await this.emailField.fill(username)
        await this.passwordField.fill(password)
        await this.loginBtn.click()
    }

    async assertLoginSuccessful(username:string) {
        await this.page.waitForSelector(".account")
        await expect(this.emailDisplay).toContainText(username)
    }

}