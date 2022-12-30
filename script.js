console.log('Hello world'[10])
// console.log('Hello world'[10]) komentar
let name = 'Musa' 
let fullName = 'Musa Mustafov'
let isRaining = true
let temperature = 20
let planent = 'earth'

temperature = 22

let celsius = 10
let fahrenheit = celsius * 1.8 + 32

console.log(fahrenheit)

let cash = 44
let price = 40
let change = cash - price
let neededMoney = price - cash


if (cash > price) {
    console.log("Here's your "+ change +" dollar change")
}
else if ( cash === price) {
    console.log("You paid the exact amount, have a nice day!")
}
else {
    console.log("Sorry sir, that's not enough. You still owe us "+ neededMoney +" dollars")
}


if (cash > price) {
    console.log(`Here's your ${change} dollar change`)
}
else if ( cash === price) {
    console.log("You paid the exact amount, have a nice day!")
}
else {
    console.log(`Sorry sir, that's not enough. You still owe us ${neededMoney} dollars`)
}

let isStoreOpen = false
if (cash >= price || isStoreOpen === true) {
    console.log("print the receipt")
}
// searches got at least one true value

if (cash >= price && isStoreOpen === true) {
    console.log("print the receipt")
}
// both values have to be true
// isStoreOpen === true = isStoreOpen
//isStoreOpen === false = !isStoreOpen

let val = "d"
if ("val") {
    console.log(!!val)
}
else {
    console.log(!!val)
}

let hot = true
hot ? console.log("weather is hot outside") : console.log("weather is cold outside")

let subscribed = false
let loggedIn = false

if (subscribed && loggedIn) {
    console.log("Good job!")
}
else if (subscribed || loggedIn) {
    console.log("Get vip today at 50% off!")
}
else {
    console.log("Log in")
}

// dry don't repeat yourself
//let count = 1
//while (count <= 100) {
//    console.log("this ran")
//    count = count + 1
//}
//for (let i=0; i <= 100; i++) {
   // console.log(i)
//}
//i = i + 1 === i++ === ++i

for (let i=1; i<=20; ++i) {
    if (i%3 === 0 && i%5 === 0) {
        console.log(`${i} -> Frontend Simplified`)
    }
    else if (i % 3 === 0) {
        console.log(`${i} -> Frontend`)
    }
    else if (i%5 === 0) {
        console.log(`${i} -> Simplified`)
    }
    else {
        console.log(i)
    }
}


const str = "Frontend Simplified"

for (let i=0; i<str.length; ++i) {
    console.log(str[i])
}


//DRY DON'T REPEAT YOURSELF
console.log("hello world")
console.log("hello world")
console.log("hello world")

function welcomePersonToFES(name) {
    console.log(`Welcome to FES ${name}`)
}

welcomePersonToFES("Musa")
