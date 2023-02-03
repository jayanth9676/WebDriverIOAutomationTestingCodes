/* 
Write code to Launch Any Web app with wdio javascript
 - Login to app
 - Verify home page
 - Click on any link
 - Verify the titles of new tab redirected is not matching with the parent tab
 - Close the tab
 - Signout of the applications
*/

// const {remote} = require("webdriverio");

async function launchWebApp() {
    // const browser = await remote({
    // logLevel: "error",
    // capabilities: {
    //     browserName: "chrome"
    // }
    // });

    try {
        // Login to the app
        await browser.url("https://rahulshettyacademy.com/loginpagePractise");
        await browser.setValue("input[name='username']", "your-username");
        await browser.setValue("input[name='password']", "your-password");
        await browser.click("input[type='submit']");
        await browser.waitForExist("#home-page");

        // Verify the home page
        const title = await browser.getTitle();
        if (title !== "Home Page") {
            throw new Error(`Unexpected title: ${title}`);
        }

        // Click on a link
        const link = await browser.$("a.some-link");
        await link.click();
        const newTab = await Promise.all(await browser.getWindowHandles().then(handles => handles.filter(handle => handle !== (browser.getWindowHandle()))[0]));
        await browser.switchToWindow(newTab);

        // Verify that the title of the new tab is different from the parent tab
        const newTabTitle = await browser.getTitle();
        if (newTabTitle === title) {
            throw new Error("The title of the new tab is the same as the parent tab.");
        }

        // Close the tab
        await browser.closeWindow();
        await browser.switchToWindow((await browser.getWindowHandles())[0]);

        // Sign out of the app
        await browser.click("a.logout");
        await browser.waitForExist("input[name='username']");
    } finally {
    // Close the browser
        await browser.deleteSession();
    }
}
module.exports = new launchWebApp();
