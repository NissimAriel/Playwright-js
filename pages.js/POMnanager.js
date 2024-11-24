const {CheckOut} = require("../pages.js/ChkOutPage");
const {Inven} = require("../pages.js/InvenPage");
const {Item} = require("../pages.js/ItemPage");
const {Login} = require("../pages.js/LoginPage");
const {OverView} = require("../pages.js/OverViewPage");
const {Sum} = require("../pages.js/SumPage")

exports.POMmanager = class POMmanager  {


    constructor(page){
        this.page = page;
        this.checkout = new CheckOut(this.page);
        this.inven = new Inven(this.page);
        this.item = new Item(this.page);
        this.login = new Login(this.page);
        this.overview = new OverView(this.page);
        this.sum = new Sum(this.page);

    }

    getCheckOut(){
        return this.checkout;
    }

    getInvenv(){
        return this.inven;
    }

    getItem(){
        return this.item;
    }

    getLogin(){
        return this.login;
    }

    getOverView(){
        return this.overview;
    }

    getSum(){
        return this.sum;
    }

}

