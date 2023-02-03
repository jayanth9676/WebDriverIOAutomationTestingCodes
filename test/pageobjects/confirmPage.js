class ConfirmPage{
    get successButton(){
        return $(".btn-success")
    }
    get country(){
        return $("#country")
    }
    get loadingEllipsis(){
        return $(".lds-ellipsis")
    }
    get clickIndia(){
        return $("=India")
    }
    get submitButton(){
        return $("input[type='submit']")
    }
    get successAlert(){
        return $(".alert-success")
    }

    async confirmOrder(countryname){
        await this.successButton.click()
        await this.country.setValue(countryname) 
        await (await this.loadingEllipsis).waitForExist({reverse:true})
        // change India to other option
        await this.clickIndia.click()
        await this.submitButton.click()
        await expect(await this.successAlert).toHaveTextContaining("Success")
    }
}

module.exports = new ConfirmPage()