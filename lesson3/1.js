// 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100 -- >
//     создадим массив и будем записывать туда числа
//         - проверим числа от 0 до 100 циклом while
//     -если число делится без остатка на числа от 2 до корня этого числа, оно не простое, не записываем
//     - иначе записываем

const arr = []
let i = 0
let n = 100

while (i < n) {
    const limit = Math.sqrt(i)
    let isPrime = true
    for (let j = 2; j <= limit; j++) {
        if (i % j === 0) {
            isPrime = false
            break
        }
    }
    if (isPrime == true && i > 1)
        arr.push(i)
    i++
}
console.log(arr)