const prompt = require('prompt-sync')({ sigint: true })


function addNum(firstNum, secondNum) {
  return firstNum + secondNum
}
function subNum(firstNum, secondNum) {
  return firstNum - secondNum
}
function multNum(firstNum, secondNum) {
  return firstNum * secondNum
}
function divNum(firstNum, secondNum) {
  return firstNum / secondNum
}

console.log('Welcome to Node CLI Calculator App')
console.log('')
console.log('Please read the acceptance criteria to egt started')

const name = prompt('What is your name? ')
console.log(`Hey there ${name}`)



for (let i = 0; i < 1; ) {
   
    
    let action = prompt(`Addition, Substraction, Multiply, Division `)

    const first = prompt(`Enter first number `)
    const second = prompt(`Enter second number `)

    const x = Number(first)
    const y = Number(second)

    if (action === 'Addition') {
      console.log(addNum(x, y))
    }

    if (action === 'Subtraction') {
      console.log(subNum(x, y))
    }

    if (action === 'Multiply') {
      console.log(multNum(x, y))
    }

    if (action === 'Division') {
      console.log(divNum(x, y))
    }
    
  
  
  const question = prompt('Do you want to run again? (Yes/No) ')
    if(question === 'Yes'){
      i = 0
    } else {
      i = 1
      console.clear()
      console.log("Thank you for using the CLI Calculator! ")
    }
}
