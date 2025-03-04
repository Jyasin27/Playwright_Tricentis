import { Locator, Page } from "playwright/test";
import { AbstractPage } from "./AbstractPage";

export class CartPage extends AbstractPage{

    readonly countryField: Locator
    readonly stateField: Locator
    readonly termsConditionCheckbox: Locator
    readonly checkoutBtn: Locator

    constructor(page: Page) {
        
        super(page)
        this.countryField = page.locator('.country-input')
        this.stateField = page.locator('.state-input')
        this.termsConditionCheckbox = page.locator('#termsofservice')
        this.checkoutBtn = page.locator('#checkout')
    }

    async enterShippingDetails() {
        await this.countryField.selectOption('1')
        await this.termsConditionCheckbox.click()
        await this.checkoutBtn.click()
    }
}