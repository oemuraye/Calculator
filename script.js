class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
    }
    clear() {
        this.previousOperand = ''
        this.currentOperand = ''
        this.operation = undefined

    }
    delete() {
        
    }
    apendNumber(number) {
        if (number === '.' && this.currentOperand.include('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString()    
    }
    chooseOperation(operation) {

    }
    compute() {

    }
    updateDisplay() {
        this.currentOperandTextElement.innertext = this.currentOperand
    }
}


var numberButtons = document.querySelectorAll('[data-number]')
var operationButtons = document.querySelectorAll('[data-operation]')
var equalsButtons = document.querySelector('[data-equals]')
var deleteButtons = document.querySelector('[data-delete]')
var allClearButtons = document.querySelector('[data-all-clear]')
var previousOperandTextElement = document.querySelector('[data-previous-oparand]')
var currentOperandTextElement = document.querySelector('[data-current-oparand]')

var calculator = new Calculator(previousOperandTextElement, currentOperandTextElement) 

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.apendNumber(button.innertext)
        calculator.updateDisplay()
    })    
});