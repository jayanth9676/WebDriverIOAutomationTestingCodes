const expectchai = require('chai').expect

describe('Functional Testing on Application', async()=>{
    xit('Scrolling and Mouse Hover', async()=>{
        /* await browser.url("https://rahulshettyacademy.com/AutomationPractice/")
        await $("#mousehover").scrollIntoView()
        await browser.pause(3000)
        await $("#mousehover").moveTo()
        await browser.pause(3000)
        await $("=Top").click() */
        /* await browser.maximizeWindow()
        await $("//button[@id='mousehover']").scrollIntoView()
        await $("//button[@id='mousehover']").moveTo()
        await $("//a[normalize-space()='Top']").click() */


        await browser.url("http://only-testing-blog.blogspot.com/2014/09/selectable.html")
        await browser.waitUntil(
            async() => await browser.execute(async() => document.readyState === 'complete'),
            {
              timeout: 5000, // 5 seconds
              timeoutMsg: 'Message on failure'
            }
        );
        await $("//button[@ondblclick='myFunction()']").doubleClick()
        /* await browser.waitUntil(async()=>await browser.isAlertOpen(),
            {
                timeout: 3000,
                timeoutMsg: 'error message is not showing up'
            }
        ) */
        console.log(await browser.isAlertOpen())
        // expectchai(await browser.isAlertOpen()).to.be.true
        // expectchai(await browser.getAlertText()).to.equal("You double clicked me.. Thank You..")
        // await browser.acceptAlert()
    })

    xit('Web Tables Sort validation Smoke', async()=>{
        await browser.url("https://rahulshettyacademy.com/seleniumPractise/#/offers")
        await $("tr th:nth-child(1)").click()
        const veggiesLocators = await $$("tr td:nth-child(1)")
        const OriginalveggiesNames = await veggiesLocators.map(async veggie => await veggie.getText())
        console.log(OriginalveggiesNames)
        let veggies = OriginalveggiesNames.slice()
        let sortedVeggies = veggies.sort()
        console.log(sortedVeggies)
        expectchai(veggies).to.eql(sortedVeggies)
    })

    it('Web Tables Sort validation Smoke', async()=>{
        await browser.url("https://rahulshettyacademy.com/seleniumPractise/#/offers")
        await $("input[type='search']").setValue("tomato")
        const veggieLocators = await $$("tr td:nth-child(1)")
        await expect(veggieLocators).toBeElementsArrayOfSize({eq:1})
        console.log(await veggieLocators[0].getText())
        await expect(await veggieLocators[0]).toHaveTextContaining("Tomato")
    })
})
