const loginPage = require('/Users/tnluser/projects_vscode/courseOnWdio/test/pageobjects/loginPage.js')
const fs = require('fs')
let loginCredentials = JSON.parse(fs.readFileSync('/Users/tnluser/projects_vscode/courseOnWdio/test/testData/loginTest.json'))

describe('Ecommerce Application', async()=>{
    loginCredentials.forEach(({username, password}) => {
        it('Login Fail page', async()=>{
            await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
            console.log(await browser.getTitle())
            await expect(browser).toHaveTitleContaining("Rahul Shetty Academy")

            // username should be rahulshettyacademy to succeed login
            await loginPage.login(username+"h", password)
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
})