//Arrow Functions -  class structure
//Arrow functions allows a short syntax for writing function expressions.
//You don't need the function keyword, the return keyword, and the curly brackets.
//Make use of the new ECMAScript 6 class structure

console.log("soc una pute")
console.log("hola modulo a")

// let = functionName = parameter => WhatDoIHaveToReturn
//Arrow doesnt redefine

class Person {
    constructor(name) {
        this.name = name
    }


    printNameArrow() {
        setTimeout(() => {
            console.log('Arrow PERSON  ' + this.name)
        }, 100)
    }

    printNameFunction() {
        setTimeout(function() {
            console.log('Function PERSON:  ' + this.name)
        }, 100)
    }
} //Person
class PersonAge {
    constructor(age) {
        this.age = age
    }


    printNameArrow2() {
        setTimeout(() => {
            console.log('Arrow AGE  ' + this.age)
        }, 100)
    }

    printNameFunction2() {
        setTimeout(function() {
            console.log('Function AGE : ' + this.age)
        }, 100)
    }
} //Person

let age = new PersonAge('27')
let person = new Person('Bob')
person.printNameArrow()
person.printNameFunction()
console.log(this.name)
age.printNameArrow2()
age.printNameFunction2()
console.log(this.age)

//Make use of Let and Const -  class structure
const today = {
    year: 2021,
    month: 5,
    day: 9,
};

const tomorrow = {
    year: today.year,
    month: today.month,
    day: today.day + 1,
};

const dayAfterTomorrow = {
    year: tomorrow.year,
    month: tomorrow.month,
    day: tomorrow.day + 1 <= 31 ? tomorrow.day + 1 : 1,
};

console.log(today)
console.log(tomorrow)
console.log(dayAfterTomorrow)

//Make use of the Template Strings

const alumno = { nombre: "Einar", nota: 6, profesora: "La Veneno" };
const plantilla = `<div>Buenos dias, ${alumno.nombre}  nos entusiasma comunicar que has quedado ${alumno.nota>5? "aprobade":"suspense"} te felicitamos por el esfuerzo.  Atentamente: ${alumno.profesora} . </div>`;
window.onload = function() {
    var body = document.getElementsByTagName("body")[0];
    body.innerHTML = plantilla;
}