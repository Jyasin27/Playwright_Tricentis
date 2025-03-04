import { test, expect } from '@playwright/test'
import { HomePage } from '../../page_objects/HomePage'
import { LoginPage } from '../../page_objects/LoginPage'
import { ProductsPage } from '../../page_objects/ProductsPage'

test.describe('Tricentis Test', () => {

    let homePage: HomePage
    let loginPage: LoginPage
    let productsPage: ProductsPage


    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page)
        loginPage = new LoginPage(page, "fakemail@email.com")
        productsPage = new ProductsPage(page, "Books")

        await homePage.naviagateToSite()
    })

    test.afterEach(async () => {
        
    })

    test('Login Test', async ({ page }) => {
        
        await homePage.navigateToLogin()
        await loginPage.login("fakemail@email.com", "Password@123")
        await loginPage.assertLoginSuccessful("fakemail@email.com")

        await productsPage.addItem("Books", "Computing and Internet")
        await page.pause()
    })
    

    
 })