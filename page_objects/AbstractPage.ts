import { Page } from "playwright";

export class AbstractPage{

    readonly page: Page

    constructor(page) {
        this.page = page
    }
}