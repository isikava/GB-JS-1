class Cart {
    cart = []
    add(item) {
        let index = this.cart.indexOf(item)
        if (index > -1) {
            item.count++
        } else {
            this.cart.push(item)
        }
    }
    remove(item) {
        let index = this.cart.indexOf(item)
        if (index > -1) {
            this.cart.splice(index, 1)
        }
    }
    clearCart() {
        this.cart = []
    }
    showCart() {
        if (this.cart.length == 0) {
            console.log('Корзина пуста.')
        } else {
            for (let { name: n, price: p, count: c } of this.cart) {
                console.log(`Name: ${n}, Price: ${p}, count: ${c}`)
            }
        }

    }
    countCartTotal() {
        //как вариант
        // let total = 0
        // for (let { price, count } of this.cart) {
        //     total += price * count
        // }
        // return total

        return this.cart.reduce((total, curr) => {
            return total + curr.price * curr.count
        }, 0)
    }
    showCartTotal() {
        let result = cart.countCartTotal()
        console.log(`Сумма в корзине: ${result}`)
    }
}

class Product {
    name
    price
    count = 1
    constructor(name, price) {
        this.name = name
        this.price = price
    }
}

const cart = new Cart()
const art111 = new Product('Computer', 2100)
cart.add(art111)
const art222 = new Product('Macbook', 3000)
cart.add(art222)
const art333 = new Product('Phone', 1100)
cart.add(art333)
cart.add(art333)
console.log(art111, art222, art333)
console.log(cart)
cart.showCart()
cart.showCartTotal()
cart.remove(art222)
cart.showCart()
cart.showCartTotal()
cart.clearCart()
cart.showCart()
cart.showCartTotal()