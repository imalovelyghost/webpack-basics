//Arrow Functions
//Arrow functions allows a short syntax for writing function expressions.
//You don't need the function keyword, the return keyword, and the curly brackets.

console.log("soc una pute")

// let = functionName = parameter => WhatDoIHaveToReturn
//Arrow doesnt redefine

class Person {
    constructor(name) {
        this.name = name
    }


    printNameArrow() {
        setTimeout(() => {
            console.log('Arrow ' + this.name)
        }, 100)
    }

    printNameFunction() {
        setTimeout(function() {
            console.log('Function: ' + this.name)
        }, 100)
    }
} //Person

let person = new Person('Bob')
person.printNameArrow()
person.printNameFunction()
console.log(this.name)