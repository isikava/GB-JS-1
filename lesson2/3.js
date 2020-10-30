let a = +prompt('Vvedite a:')
let b = +prompt('Vvedite b:')

function arif(a, b) {
    if (a >= 0 && b >= 0) {
        console.log(a - b)
    } else if (a < 0 && b < 0) {
        console.log(a * b)
    } else {
        console.log(a + b)
    }
}

arif(a, b)