let str = "Sanyogita"
console.log(typeof str)
console.log(str)

let num = 23
console.log(typeof num)
console.log(num)

let bool = Boolean(str)

console.log(typeof bool)
console.log(bool)


let nullval = null
console.log(typeof nullval)
console.log(nullval)


let valuenot;
console.log(typeof valuenot)
console.log(valuenot)

let sym = Symbol(str);
let sym1 = Symbol(str)

console.log(typeof sym)
console.log(typeof sym1)
console.table([sym1, sym])
console.log(sym === sym1)

//const bigvalue = 232222222222333455766564534444564543423232n
console.log(typeof bigvalue)
//console.log(bigvalue)

let arr = ["IT", "ACCOUNTS"]
console.log(typeof arr)
console.log(arr)


let myobj = {
    name: "raja",
    age: 23,
}
console.log(typeof myobj)
console.log(myobj)

let funct = function ()
{
    console.log("my name is sanyogita")
}
// console.log(typeof funct)
// console.log(funct)





// let strTwo = "Raja"

// printMyName()

// console.log(strTwo)



// var scopeVar = 1
// let scopeLet = 2
// console.log(scopeVar,"before-function var")
// console.log(scopeLet,"before-function let")
function checkScope(){
    var scopeVar = 10

    var scopeVar = 15
    console.log(scopeVar,"in-function var")
    let scopeLet = 15
    
    console.log(scopeLet,"in-function let")
}



if (5 == 5){
    var var1 = 45
    let let1 = 50
}
console.log(var1)
console.log(let1)

checkScope()
// console.log(scopeVar,"after-function var")
// console.log(scopeLet,"after-function let")

//  function printMyName(){
//     console.log("Hello EveryOne This Dileep")


// }

// console.log(typeof printMyName)

// printMyName()
// console.log(a)

