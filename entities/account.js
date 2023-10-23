const deposit = require("./deposit")
const loan = require("./loan")
const transfer = require("./transfer")

module.exports = class account {
    #balance = 0
    constructor(user) {
        this.allDeposit = []
        this.allTransfer = []
        this.allLoan = []
        this.onwer = user
    }

    get balance() {
        return this.#balance
    }

    newDeposit(value, date) {
        const currentDeposit = new deposit(value, date)
        this.#balance += value
        this.allDeposit.push(currentDeposit)
    }

    newLoan(value, date, installmentNumber) {
        const currentLoan = new loan(value, date, installmentNumber)
        const totToPay = currentLoan.installments.reduce((acum, {value}) => acum + value, 0)
        this.#balance += totToPay
        this.allLoan.push(currentLoan)
    }

    newTransfer(receiver, senter, value, date) {
        if (receiver == this.onwer) {
            this.#balance += value
        } else if (senter == this.onwer) {
            this.#balance -= value
        }
        const currentTransfer = new transfer(receiver, senter, value, date)
        this.allTransfer.push(currentTransfer)
    }
}

/* const eu = new account('lucas')
eu.newDeposit(900, '6 de maio')
eu.newTransfer('carlos', 'lucas', 300, '4 de outubro')
console.log(eu.allDeposit)
console.log(eu.allTransfer)
console.log(eu.balance) */