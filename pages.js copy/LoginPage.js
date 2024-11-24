const { expect } = require("@playwright/test");

exports.Login = class Login {
        

    constructor(page) {
        this.page = page;
        this.usernameField = page.locator("#user-name");
        this.passwordField = page.locator("#password");
        this.loginBtn = page.locator("#login-button")
    }

    async performLogin(userName, password){
        await this.usernameField.fill(userName);
        await this.passwordField.fill(password);
        await this.loginBtn.click();
    }
    


    
      
  }