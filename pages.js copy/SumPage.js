const { expect } = require("@playwright/test");

exports.Sum = class Sum {

    constructor(page){
        this.page = page;
        this.checkout = page.locator("#checkout")
        this.itemTitle = page.locator(".inventory_item_name");
    }

    async goToChckOut(){
        await this.checkout.click();
    }



}