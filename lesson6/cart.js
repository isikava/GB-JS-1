class Product {
    name = ''
    price = 0
    img = ''
    constructor(name, price, img) {
        this.name = name
        this.price = price
        this.img = img
    }

    getProductTemplate() {
        const { name, price, img } = this
        const template = document.createElement('div')
        template.classList.add('product')
        template.innerHTML = `    
            <div class="product__image">
            <img src="${img}" alt="img" class="product__image_img">
            </div> 
            <div>Товар: <span>${name}</span></div>
            <div>Цена: <span>${price}</span></div>
            
            `
        const btn = document.createElement('button')
        btn.classList.add('btn')
        btn.classList.add('btn-primary')
        btn.innerHTML = 'В корзину'
        btn.addEventListener('click', () => {
            const CartInstance = new Cart()
            let cartProduct = new CartProduct()
            let copy = Object.assign(cartProduct, this)
            CartInstance.add(copy)
            console.log(copy)
            console.log(CartInstance)
        })

        template.append(btn)

        return template
    }
}

class CartProduct extends Product {
    count = 1
    constructor(name, price, img) {
        super(name, price, img)
    }

    getCartTemplate() {
        const { name, price, count } = this
        const template = document.createElement('div')
        template.innerHTML = `
            <span>${name}: ${price} x ${count} = ${price * count}</span>
            `
        // template.append(this.getMinusBtn())

        return template
    }
}

class ProductsList {
    items = []

    constructor() { }

    add(item) {
        this.items.push(item)
        this.render()
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
        if (Cart._instance) {
            return Cart._instance
        }

        super(items)
        this.init()

        Cart._instance = this
    }

    init() {
        const placeToRender = document.querySelector('nav')

        const cart = document.createElement('div')
        cart.classList.add('cart')

        const btn = document.createElement('button')
        btn.innerHTML = 'Корзина'
        btn.classList.add('btn', 'btn-secondary')

        const list = document.createElement('div')
        list.classList.add('cart__list')
        btn.addEventListener('click', () => {
            list.classList.toggle('shown')
        })

        cart.append(btn)
        cart.append(list)
        placeToRender.append(cart)

        this.render()
    }

    getCartTotal() {
        return this.items.reduce((total, curr) => {
            return total + curr.price * curr.count
        }, 0)
    }

    getSumTemplate() {
        const template = document.createElement('div')
        template.innerHTML = `Суммарная цена: ${this.getCartTotal()}`

        return template
    }

    getEmptyTemplate() {
        const template = document.createElement('div')
        template.innerHTML = `Корзина пуста`

        return template
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

        if (this.items.length) {
            placeToRender.append(this.getSumTemplate())
        } else {
            placeToRender.append(this.getEmptyTemplate())
        }
    }
}



class Nav {
    constructor() { }
    render() {
        const placeToRender = document.getElementById('header-container')
        const nav = document.createElement('nav')
        nav.classList.add("navbar", "navbar-light", "bg-light")
        nav.innerHTML = `
                <a class="navbar-brand" href="#">MyShop</a>
                
        `
        placeToRender.append(nav)
    }
}

const NavInst = new Nav()
NavInst.render()

const ProductListInst = new ProductsList()
const prod1 = new Product('Mac', 3000, 'img/Mac.jpg')
const prod2 = new Product('HP', 2000, 'img/Hp.jpg')
ProductListInst.add(prod1)
ProductListInst.add(prod2)
console.log(ProductListInst)

const CartInst = new Cart()