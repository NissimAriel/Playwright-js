const { expect } = require("@playwright/test");

exports.Inven = class Inven{

    constructor(page) {
        this.page = page;
        this.itemPicked = page.locator("#item_4_title_link");


    }

    async choseItem(){
        await this.itemPicked.click();
    }

}