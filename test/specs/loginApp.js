describe('Ecommerce Application', async()=>{
    xit('Login Fail page', async()=>{
        await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
        console.log(await browser.getTitle())
        await expect(browser).toHaveTitleContaining("Rahul Shetty Academy")

        // username should be rahulshettyacademy to succeed login
        await $("input[name='username']").setValue("rahulshettyacadem")
        const password = $("//input[@type='password']")
        await password.setValue("learning")
        await $("#signInBtn").click()
        await browser.waitUntil(async()=>await $("#signInBtn").getAttribute('value') === 'Sign In',
            {
                timeout: 5000,
                timeoutMsg: 'error message is not showing up'
            }
        )
        console.log(await $(".alert-danger").getText())
        await expect($("p")).toHaveTextContaining("(username is rahulshettyacademy and Password is learning)")
    })

    it('Login Success page', async()=>{
        await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
        console.log(await browser.getTitle())

        await $("input[name='username']").setValue("rahulshettyacademy")
        await $("//input[@type='password']").setValue("learning")
        await $("#signInBtn").click()
        await $(".btn-primary").waitForExist()
        await expect(browser).toHaveUrlContaining("shop")
        await expect(browser).toHaveTitle("ProtoCommerce")
    })
})
