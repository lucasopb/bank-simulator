const loan = require("./entities/loan")
const User = require("./entities/user")

class App {
    static #users = []

    static get users() {
        return this.#users
    }

    static newUser(name, gmail) {
        if (this.findUserByGmail(gmail) === undefined) {
            const user = new User(name, gmail)
            App.users.push(user)
        } else {
            console.log('email ja existente')
        }
    }

    static findUserByGmail(gmail) {
        const emailValid = App.users.find((elemento) => elemento.gmail === gmail)
        return emailValid
    }

    static makeDeposit(value, date, gmail) {
        const userGmail = this.findUserByGmail(gmail)
        if (userGmail === undefined) {
            console.log('gmail invalido')
        } else {
            userGmail.Account.newDeposit(value, date)
        }
    }

    static makeLoan(value, date, installmentNumber, gmail) {
        const userGmail = this.findUserByGmail(gmail)
        if (userGmail === undefined) {
            console.log('gmail invalido')
        } else {
            userGmail.Account.newLoan(value, date, installmentNumber)
        }
    }

    static makeTransfer(gmail, senter, value, date) {
        const userGmail = this.findUserByGmail(gmail)
        if (userGmail === undefined) {
            console.log('gmail invalido')
        } else {
            userGmail.Account.newTransfer(receiver, senter, value, date)
        }
    }

}

const app = new App()
App.newUser('lucas', 'luquitasoliveira@gmail.com')
App.newUser('marcos', 'marcos123@gmail.com')
loan.interentRate = 10
App.makeDeposit(300, '6 de janeiro', 'luquitasoliveira@gmail.com')
App.makeLoan(200, '18 de janeiro', 6, 'marcos123@gmail.com')
App.makeTransfer('lucas', 'marcos', 100, '4 de setembro', 'marcos123@gmail.com')
console.log(App.users[1].Account.allLoan[0])
console.log(App.users[1].Account.balance)
console.log(App.users)

