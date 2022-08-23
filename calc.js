class Calculator {
    constructor(previousSelectionTextElement, currentSelectionTextElement) {
        this.previousSelectionTextElement = previousSelectionTextElement
        this.currentSelectionTextElement = currentSelectionTextElement
        this.clear()
    }

    clear() {
        this.currentSelection = ''
        this.previousSelection = ''
        this.operation = undefined
    }

    delete() {
        this.currentSelection = this.currentSelection.toString().slice(0, -1)
    }

    appendNumber(number) {
        if (number === '.' && this.currentSelection.includes('.')) return
        this.currentSelection = this.currentSelection + number.toString();
    }

    chooseOperation(operation) {
        if (this.currentSelection === '') return
        if (this.previousSelection !== '') {
            this.compute()
        }
       this.operation = operation
       this.previousSelection = this.currentSelection
       this.currentSelection = ''; 
    }

    compute() {
        let computation
        const prev = parseFloat(this.previousSelection)
        const current = parseFloat(this.currentSelection)
        if (isNaN(prev) || isNaN(current)) return
        switch (this.operation) {
            case '+':
                computation = prev + current
                break
            case '-':
                computation = prev - current
                break
            case 'x':
                computation = prev * current
                break
            case '/':
                computation = prev / current
                break
            default:
                return
                
                
        }
        this.currentSelection = computation
        this.operation = undefined
        this.previousSelection = ''
    }

    updateDisplay() {
        this.currentSelectionTextElement.innerText = this.currentSelection
        this.previousSelectionTextElement.innerText = this.previousSelection
    }
}

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousSelectionTextElement = document.querySelector('[data-previous-selection]')
const currentSelectionTextElement = document.querySelector('[data-current-selection]')

const calculator = new Calculator(previousSelectionTextElement, currentSelectionTextElement)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay();
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay();
    })
})

equalsButton.addEventListener('click', button => {
    calculator.compute()
    calculator.updateDisplay()
})

allClearButton.addEventListener('click', button => {
    calculator.clear()
    calculator.updateDisplay()
})

deleteButton.addEventListener('click', button => {
    calculator.delete()
    calculator.updateDisplay()
})