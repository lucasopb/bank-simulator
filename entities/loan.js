const installment = require("./installment")
module.exports = class loan {
    static #interentRate = 6
    #taxe = 0
    constructor(value, date, installmentNumber) {
        this.value = value 
        this.date = date
        this.installments = []
        for (let i = 1; i < installmentNumber + 1; i++) {
            const instment = new installment(value/installmentNumber, i)
            this.installments.push(instment)
            if (i == 1) {
                this.#taxe = value * ((loan.interentRate / 2) / 100)
            }
            value += this.#taxe
        }        
    }

    static get interentRate() {
        return this.#interentRate
    }

    static set interentRate(newInterentRate) {
        if (typeof newInterentRate == 'number') {
            this.#interentRate = newInterentRate
        } else {
            console.log('value must be a number')
        }
    }

}


/* const parcelas = new loan(100, '12 de dezembro', 10)
loan.interentRate = 2
console.log(parcelas.installments)
loan.interentRate = 2
console.log(parcelas.installments)
 */