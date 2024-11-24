const {CheckOut} = require("../pages/ChkOutPage");
const {Inven} = require("../pages/InvenPage");
const {Item} = require("../pages/ItemPage");
const {Login} = require("../pages/LoginPage");
const {OverView} = require("../pages/OverViewPage");
const {Sum} = require("../pages/SumPage")

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

