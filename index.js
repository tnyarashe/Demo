// //data types

// //strings, integers, float, boolean, null, undefined, symbol, BigInt

// //Primitive datatypes: 

// //Non primitive data types
// // - objects
// // - arrays
// // - functions

// var name1 = "Dj";
// let name2 = "Junior";
// const name3 = "Yolanda";

// console.log(name1)
// console.log(name2)
// console.log(name3)

// const fruits = ["mango", "banana", "orange", "grapes", "apples"]

// const everythingFromOrange = fruits.splice(2, 3)

// // const numberOfFruits = fruits.length
// // const mango = fruits[0]
// // const orange = fruits[2]
// // const removeApple = fruits.pop()
// // const removeMango = fruits.shift()
// // const addLemon = fruits.push("lemon")
// // const addKiwi = fruits.unshift("Kiwi")
// // console.log(removeMango)

// console.log(everythingFromOrange)

// // console.log(addKiwi)
// // console.log(removeApple)
// // console.log(mango)

// const add = "1"+1

// console.log(fruits)

// console.log("1"===1)

//teenager, adult
let age = 25;
let ageGroup;

if (age < 16){
    ageGroup = "Minor"
    console.log("You are ", ageGroup)

    if (age == 30){
            console.log("Show age group content")
    }
    else if (age == 25){
        console.log("Show 25 year old content")
    }
}

else if (age > 16 && age < 20){
    ageGroup = "Teenager"
}

else {
    ageGroup = "Adult"
}

//object has properties
let John = {
    middle: "sfiso",
    top: "nike"
}

//updating the object
John.top = "Kappa"

console.log("You are ", ageGroup)

