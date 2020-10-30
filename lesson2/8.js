// *С помощью рекурсии организовать функцию возведения числа в степень. Формат: function power(val, pow), где val – заданное число, pow – степень.

function power(val, n) {
    if (n == 0) return 1
    if (n === 1) return val
    return power(val, n - 1) * power(val, 1)
}

console.log(power(2, 1))
console.log(power(2, 2))
console.log(power(2, 10))
console.log(power(2, 0))
