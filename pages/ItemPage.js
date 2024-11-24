const { expect } = require("@playwright/test");

exports.Item = class Item {

    constructor(page){
        this.page = page;
        this.addCartBtn = page.locator(".btn.btn_primary.btn_small.btn_inventory");
        this.basket = page.locator(".shopping_cart_link");
    }

    async addItem(){
        await this.addCartBtn.click();
    }

    async goToBasket(){
        await this.basket.click();
    }


}