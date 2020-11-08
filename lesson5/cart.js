class Product {
    name = ''
    price = 0
    img = ''
    count = 1
    constructor(name, price, img) {
        this.name = name
        this.price = price
        this.img = img
    }

    getProductTemplate() {
        const { name, price, img } = this
        const product = document.createElement('div')
        product.classList.add('product')
        product.innerHTML = `    
            <div class="product__image">
            <img src="${img}" alt="img" class="product__image_img">
            </div>        
            <div>Товар: <span>${name}</span></div>
            <div>Цена: <span>${price}</span></div>
            <button class="btn btn-primary">В корзину</button>
            `
        return product
    }

    getCartTemplate() {
        const { name, price, count } = this
        const cart = document.createElement('div')
        cart.innerHTML = `
            <span>${name}: ${price} x ${count} = ${price * count}</span>
            `

        return cart
    }
}

class ProductsList {
    items = []

    constructor() { }

    add(item) {
        this.items.push(item)
    }

    render() {
        const placeToRender = document.getElementById('main-container')
        if (!placeToRender) {
            return
        }
        placeToRender.innerHTML = ''

        this.items.forEach(item => {
            const template = item.getProductTemplate()
            placeToRender.append(template)
        })
    }
}

class Cart extends ProductsList {
    constructor(items) {
        super(items)
        this.init()
    }

    init() {
        const placeToRender = document.querySelector('nav')

        const cart = document.createElement('div')
        cart.classList.add('cart')

        const btn = document.createElement('button')
        btn.innerHTML = 'Корзина'
        btn.classList.add('btn')
        btn.classList.add('btn-secondary')

        const list = document.createElement('div')
        list.classList.add('cart__list')

        cart.append(btn)
        cart.append(list)
        placeToRender.append(cart)

        this.render()
    }

    render() {
        const placeToRender = document.querySelector('.cart__list')
        if (!placeToRender) {
            return
        }
        placeToRender.innerHTML = ''

        this.items.forEach(item => {
            const template = item.getCartTemplate()
            placeToRender.append(template)
        })
    }
}

class Nav {
    constructor() { }
    render() {
        const placeToRender = document.getElementById('header-container')
        const nav = document.createElement('nav')
        nav.classList.add('navbar')
        nav.classList.add('navbar-light')
        nav.classList.add('bg-light')
        nav.innerHTML = `
                <a class="navbar-brand" href="#">MyShop</a>
                
        `
        placeToRender.append(nav)
    }
}

// const CartInst = new Cart()
// CartInst.add(new Product('Mac', 3000))
// console.log(CartInst)

const NavInst = new Nav()
NavInst.render()

const ProductListInst = new ProductsList()
const prod1 = new Product('Mac', 3000, 'img/Mac.jpg')
const prod2 = new Product('HP', 2000, 'img/Hp.jpg')
ProductListInst.add(prod1)
ProductListInst.add(prod2)
console.log(ProductListInst)
ProductListInst.render()
const CartInst = new Cart()
CartInst.add(prod1)
CartInst.add(prod2)
console.log(CartInst)
CartInst.render()