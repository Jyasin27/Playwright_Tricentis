import { Locator } from "playwright";
import { AbstractPage } from "./AbstractPage";
import { expect } from "playwright/test";

export class ProductsPage extends AbstractPage{

    readonly booksCategory: Locator
    readonly computersCategory: Locator
    readonly electronicsCategory: Locator
    readonly apparelShoesCategory: Locator
    readonly digitalDownloadsCategory: Locator
    readonly jewelryCategory: Locator
    readonly giftCardsCategory: Locator
    readonly confirmationMessage: Locator
    readonly addBtn: (item:string) => Locator
    
    
    constructor(page) {        
        super(page)
        this.booksCategory = page.locator("//ul[@class='list']//li//a[@href='/books']")
        this.computersCategory = page.locator("//ul[@class='list']//li//a[@href='/computers']")
        this.electronicsCategory = page.locator("//ul[@class='list']//li//a[@href='/electronics']")
        this.apparelShoesCategory = page.locator("//ul[@class='list']//li//a[@href='/apparel-shoes']")
        this.digitalDownloadsCategory = page.locator("//ul[@class='list']//li//a[@href='/digital-downloads']")
        this.jewelryCategory = page.locator("//ul[@class='list']//li//a[@href='/jewelry']")
        this.giftCardsCategory = page.locator("//ul[@class='list']//li//a[@href='/gift-cards']")

        this.addBtn = (item: string) => {
          return page.locator(`//a[text()='${item}']/ancestor::div[contains(@class, 'item-box')]//input[@value='Add to cart']`)
        }
        this.confirmationMessage = page.locator(".content")
    }
    async clickOnCategory(categoryName) {
        switch (categoryName) {
            case "Books":
                await this.booksCategory.click()
                break;
            case "Computers":
                await this.computersCategory.click()
                break;
            case "Electronics":
                await this.electronicsCategory.click()
                break;
            case "Apparel & Shoes":
                await this.apparelShoesCategory.click()
                break;
            case "Digital Downloads":
                await this.digitalDownloadsCategory.click()
                break;
            case "Jewerly":
                await this.jewelryCategory.click()
                break;
            case "Gift Cards":
                await this.giftCardsCategory.click()
                break;

        }
    }

    async addItem(categoryName: string, item: string) {

        await this.clickOnCategory(categoryName)

        const itemAddbtn = await this.addBtn(item)
        itemAddbtn.click()

        await this.confirmationMessage.waitFor()
        await expect(this.confirmationMessage).toContainText('The product has been added to your ')
    }
}