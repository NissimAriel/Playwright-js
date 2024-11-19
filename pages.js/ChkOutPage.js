const { expect } = require("@playwright/test");

exports.CheckOut = class Checkout{

    constructor(page) {

        this.page = page;
        this.firstName = page.locator("#first-name");
        this.lastName = page.locator("#last-name")
        this.zip = page.locator("#postal-code")
        this.contBtn = page.locator("#continue")
    }

    async personalDetails(first, last, zip){
        await this.firstName.fill(first);
        await this.lastName.fill(last);
        await this.zip.fill(zip)
        await this.contBtn.click();
    }

}