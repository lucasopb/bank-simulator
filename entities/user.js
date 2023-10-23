const account = require("./account")

module.exports = class User {
    constructor(name, gmail) {
        this.name = name
        this.gmail = gmail
        this.Account = new account(this)
    }
}