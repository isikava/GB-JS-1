let a = +prompt('Vvedite a:')
let b = +prompt('Vvedite b:')
let operation = prompt('Vvedite operation (+,-,*,/):')

function sum(a, b) {
    return a + b
}
function minus(a, b) {
    return a - b
}
function mult(a, b) {
    return a * b
}
function divd(a, b) {
    return a / b
}

function mathOperation(a, b, operation) {
    switch (operation) {
        case '+':
            console.log(sum(a, b))
            break
        case '-':
            console.log(minus(a, b))
            break
        case '*':
            console.log(mult(a, b))
            break
        case '/':
            console.log(divd(a, b))
            break
    }
}

mathOperation(a, b, operation)