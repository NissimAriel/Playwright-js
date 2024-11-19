// @ts-check
const { test, expect } = require('@playwright/test');
const { Utils } = require("../Utilities/Utils");
const { Login } = require("../pages.js/LoginPage");
const { Inven } = require("../pages.js/InvenPage");
const { Item } = require("../pages.js/ItemPage");
const { Sum } = require("../pages.js/SumPage");
const { CheckOut } = require("../pages.js/ChkOutPage");
const { OverView } = require("../pages.js/OverViewPage");



test.describe('Tests', () => {

    test.beforeEach(async ({ page }) => {
      test.step('more details in the repport', async () => {
      
      const login = new Login(page);
      await page.goto(Utils.User_Details.BaseUrl);
      await login.performLogin(Utils.User_Details.Username, Utils.User_Details.Password);
    
    })
    
});

test.afterEach(async({page}, testInfo) => {
    await page.waitForTimeout(500);
    await page.screenshot({path: `screenshots/${testInfo.title}_${testInfo.status}.jpg`})
})
  

test('Validate Login Test', async ({ page }) => {
    
    await page.waitForURL(Utils.User_Details.LoggedUrl)
    expect(page).toHaveURL(Utils.User_Details.LoggedUrl)

});

test('Full Flow', async ({page}) => {

    const inven = new Inven(page);
    const item = new Item(page);
    const sum = new Sum(page);
    const checkout = new CheckOut(page);
    const overview = new OverView(page);
    await inven.choseItem();
    await item.addItem();
    await item.goToBasket();
    await expect(sum.itemTitle).toContainText(Utils.Item_Name)
    await sum.goToChckOut()
    await checkout.personalDetails(Utils.User_Details.First_Name, Utils.User_Details.Last_Name, Utils.User_Details.Zip_Code);
    await expect(overview.itemTitle).toContainText(Utils.Item_Name);
    await overview.goFinish()
    await expect(overview.success).toContainText("Thank you for your order!")



});

})
