import { Locator, Page } from "@playwright/test";
import { AbstractPage } from "./AbstractPage";

export class HomePage extends AbstractPage{

    readonly loginLink: Locator

    constructor(page: Page) {
        super(page)
        this.loginLink = page.locator(".ico-login")
    }
    
    async naviagateToSite()
    {
        await this.page.goto("https://demowebshop.tricentis.com/")
    }

    async navigateToLogin()
    {
        await this.loginLink.click()
    }

}
