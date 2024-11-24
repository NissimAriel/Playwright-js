const { expect } = require("@playwright/test");

exports.OverView = class OverView {
        

    constructor(page) {
        this.page = page;
        this.itemTitle = page.locator(".inventory_item_name");
        this.finishBtn = page.locator("#finish");
        this.success = page.locator(".complete-header");
    }

    async goFinish(){
        await this.finishBtn.click();
    }

}