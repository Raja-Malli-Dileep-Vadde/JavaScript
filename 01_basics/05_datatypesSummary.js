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
// console.log(let1)

checkScope()
// console.log(scopeVar,"after-function var")
// console.log(scopeLet,"after-function let")

//  function printMyName(){
//     console.log("Hello EveryOne This Dileep")


// }

// console.log(typeof printMyName)

// printMyName()
// console.log(a)


// stack (primitive)  & heap (non primitive) 
// stack it gives only copy of  the variable 
// heap it gives the refrence (original value ) of the variable(object)(non primitive)

let loginName = "dileep"
console.log(loginName,"loginName before")
let anotherName = loginName
console.log(anotherName,"anotherName before")

anotherName = "sanyogita"
console.log(anotherName,"anotherName after")
console.log(loginName,"loginName after")


let myLoginDetails ={
    Name:"sanyogita",
    Password:"123456"
}

 let secLoginDetails = myLoginDetails
 console.log(myLoginDetails,"myLoginDetails")
 secLoginDetails.Name = "Raja Malli"
 secLoginDetails.Password = "00000"


 console.log(secLoginDetails,"secLoginDetails")
 console.log(myLoginDetails,"myLoginDetails")