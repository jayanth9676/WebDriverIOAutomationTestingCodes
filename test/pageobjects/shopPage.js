class ShopPage{
    
    get checkout()
    {
        // return $("*=Checkout")
        return $("//a[@class='nav-link btn btn-primary']")
    }
    get cards()
    {
        return $$("div[class='card h-100']")
    }

    async addProductsToCart(products)
    {
        for( let i =0; i< await this.cards.length;i++)
        {
            const card = await this.cards[i].$("div h4 a")
            if(products.includes(await card.getText()))
            {
                await this.cards[i].$(".card-footer button").click()
            }
        }
    }


    /* get checkout()
    {
        return $("*=Checkout")
    }
    get cards()
    {
        return $$("div[class='card h-100']")
    }
    get cardName(){
        return $("div h4 a")
    }
    get addButton(){
        return $(".card-footer button")
    }

    async addProductsToCart(products){
        for(let i=0; i < await this.cards.length; i++)
        {
            const card = await this.cards[i].cardName
            // if(products.includes(await card.getText()))
            if(products.includes((await card.getAttribute("innerText")))){
                await this.cards[i].addButton.click()
            }
        }

        // for (let i = 0; i < await this.cards.length; i++) {
        //     const card = await this.cards[i];
        //     const cardName = await card.$("h4 a");
        //     if (products.includes(await cardName.getAttribute("innerText"))) {
        //       await card.$(".card-footer button").click();
        //     }
        // }
          
    } */

}

module.exports = new ShopPage()