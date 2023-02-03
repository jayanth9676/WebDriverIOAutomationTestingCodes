const loginPage = require('/Users/tnluser/projects_vscode/courseOnWdio/test/pageobjects/loginPage.js')
const shopPage = require('/Users/tnluser/projects_vscode/courseOnWdio/test/pageobjects/shopPage.js')
const reviewPage = require('/Users/tnluser/projects_vscode/courseOnWdio/test/pageobjects/reviewPage.js')
const confirmPage = require('/Users/tnluser/projects_vscode/courseOnWdio/test/pageobjects/confirmPage.js')
const expectchai = require('chai').expect
const fs = require('fs')
let loginCredentials = JSON.parse(fs.readFileSync('/Users/tnluser/projects_vscode/courseOnWdio/test/testData/loginTest.json'))
let e2eCredentials = JSON.parse(fs.readFileSync('/Users/tnluser/projects_vscode/courseOnWdio/test/testData/e2eTest.json'))

describe('Ecommerce Application', async()=>{
    loginCredentials.forEach(({username, password}) => {
        xit('Login Fail page', async()=>{
            await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
            console.log(await browser.getTitle())
            await expect(browser).toHaveTitleContaining("Rahul Shetty Academy")
    
            await loginPage.login(username, password)
            await browser.waitUntil(async()=>await await loginPage.signIn.getAttribute('value') === 'Sign In',
                {
                    timeout: 5000,
                    timeoutMsg: 'error message is not showing up'
                }
            )
            console.log(await loginPage.alert.getText())
            await expect(await loginPage.textInfo).toHaveTextContaining("(username is rahulshettyacademy and Password is learning)")
        })
    })

    loginCredentials.forEach(({username, password}) => {
        e2eCredentials.forEach(({products}) => {
            it('End to End Test', async()=>{
                await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
                await loginPage.login(username, password)
        
                await shopPage.checkout.waitForExist()
                await shopPage.addProductsToCart(products)
                await shopPage.checkout.click()
                
                await expectchai(await reviewPage.sumOfProducts()).to.equal(await reviewPage.totalFormattedPrice())

                await confirmPage.confirmOrder("India")
            })
        });
    });

})

    


