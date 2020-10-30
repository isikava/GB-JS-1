// 2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины.
//         Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров. 
//         Товары в корзине хранятся в массиве. Задачи:
//         a) Организовать такой массив для хранения товаров в корзине;
//         b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.

const basket = [100, 200, 255, 2]
function countBasketPrice() {
    let sum = 0
    for (const value of basket) {
        sum += value
    }
    return sum
}
console.log(basket)
console.log(countBasketPrice())