describe('Windows and Frames Miscellanous',async()=>
{
    xit('Parent and Child windows switch',async()=>{
        await browser.url("https://rahulshettyacademy.com/AutomationPractice/")
        await $(".blinkingText").click()
        // const handles = await browser.getWindowHandles()
        // await browser.switchToWindow(handles[1])
        console.log(await $("h1").getText())
        console.log(await browser.getTitle())//Rahul Shetty Academy
        // await browser.closeWindow()
        // await browser.switchToWindow(handles[0])
        // console.log(await browser.getTitle())//LoginPage Practise | Rahul Shetty Academy

        /*  */
        await browser.newWindow("https://google.com")
        console.log(await browser.getTitle())
        // await browser.switchToWindow("https://rahulshettyacademy.com/loginpagePractise/")
        // await $("#username").setValue("helloiswitchedback")
        // await browser.pause(3000)
    })

    it('Frames switch', async()=>{
        await browser.url("https://rahulshettyacademy.com/AutomationPractice/")
        await (await $("#mousehover")).scrollIntoView()
        console.log(await $$("a").length)
        await browser.switchToFrame(await $("[id='courses-iframe']"))
        console.log(await $("=Courses").getTagName())
        console.log(await $$("a").length)//107
        await browser.switchToFrame(null)
        console.log(await $$("a").length)//27
    })
})