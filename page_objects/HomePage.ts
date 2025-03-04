import { Locator, Page } from "@playwright/test";
import { AbstractPage } from "./AbstractPage";

export class HomePage extends AbstractPage{

    readonly loginLink: Locator
    readonly cartLink: Locator

    constructor(page: Page) {
        super(page)
        this.loginLink = page.locator(".ico-login")
        this.cartLink = page.locator("#topcartlink")
    }
    
    async naviagateToSite()
    {
        await this.page.goto("https://demowebshop.tricentis.com/")
    }

    async navigateToLogin()
    {
        await this.loginLink.click()
    }

    async navigateToCartPage() {
        await this.cartLink.click()
    }

}
