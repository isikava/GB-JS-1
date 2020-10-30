let myNumber = 543251
console.log(myNumber)

function parse(myNumber) {
    let obj = {
        ones: 0,
        tens: 0,
        hundreds: 0,
    };
    for (let key in obj) {
        obj[key] = myNumber % 10
        myNumber = Math.floor(myNumber / 10)
    }
    return obj
}

console.log(parse(myNumber))