const expectchai = require('chai').expect

describe('Ecommerce Application', async()=>{
    xit('Login Success page', async()=>{
        await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
        await $("input[name='username']").setValue("rahulshettyacademy")
        await $("//input[@type='password']").setValue("learning")

        // await ($$(".radiotextsty")[1]).click()
        const radioButtons = await $$(".radiotextsty")
        const userDropDown = radioButtons[1]
        await userDropDown.click()

        const modal = await $(".modal-body")
        await modal.waitForDisplayed()
        await $("#cancelBtn").click()
        console.log(await $$(".radiotextsty")[0].isSelected())
        await userDropDown.click()
        await modal.waitForDisplayed()
        await $("#okayBtn").click()
        await $$(".radiotextsty")[0].click()
        expect(modal).not.toBeDisplayed()
        const dropDown = await $("select.form-control")
        await dropDown.selectByAttribute('value','teach')
        await dropDown.selectByVisibleText("Consultant")
        await dropDown.selectByIndex(0)
        console.log(await dropDown.getValue())
        expectchai(await dropDown.getValue()).to.equal("stud")
    })

    xit('Dynamic Dropdown Controls Smoke', async()=>{
        await browser.url("https://rahulshettyacademy.com/AutomationPractice/")
        await $('#autocomplete').setValue("ind")
        let items = await $$('[class="ui-menu-item"] div')
        for(var i=0; i<await items.length; i++){
            if(await items[i].getText() === "India"){
                await items[i].click()
            }
        }
    })

    it('Checkboxes Identifier', async()=>{
        await browser.url("https://rahulshettyacademy.com/AutomationPractice/")
        const checkboxEle = await $$("input[type='checkbox']")
        await checkboxEle[1].click()
        // console.log(await checkboxEle[1].isSelected())
        expectchai(await checkboxEle[1].isSelected()).to.equal(true)
        // await browser.saveScreenshot("screenshot.png")
    })
})