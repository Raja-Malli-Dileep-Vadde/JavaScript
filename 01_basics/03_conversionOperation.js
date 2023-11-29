let score = 33
console.log(typeof score)
console.log(typeof (score))


score = "33"
let valueInNumber = Number(score)  /* "33" => 33  (easy convert to number) */
console.log(typeof valueInNumber)    
console.log(valueInNumber)


score = "33abc"
valueInNumber = Number(score) /* "33abc" => NaN  (converted to number but,)*/
console.log(typeof valueInNumber) /* (type is number) */
console.log(valueInNumber) /* (it's value is Not-a-Number(NaN) ) */

score = null
valueInNumber = Number(score) /* null => 0  (converted to number but,) */ 
console.log(typeof valueInNumber) /* (type is number) */
console.log(valueInNumber)  /* (it's value is 0 (Zero) ) */

score = undefined
valueInNumber = Number(score)   /* undefined => NaN  (converted to number but,) */ 
console.log(typeof valueInNumber)  /* (type is number) */
console.log(valueInNumber)  /* (it's value is Not-a-Number(NaN) ) */


score = true
valueInNumber = Number(score)  /* true => 1 , false => 0  (converted to number but,) */ 
console.log(typeof valueInNumber)  /* (type is number) */
console.log(valueInNumber) /* (it's value for true => 1 , false => 0 ) */

score = "Dileep"
valueInNumber = Number(score) /* "Dileep" => NaN (converted to number but,)*/
console.log(typeof valueInNumber) /* (type is number) */
console.log(valueInNumber)   /* (it's value is Not-a-Number(NaN) ) */




let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn) /* 1 => true , 0 => false */
console.log(booleanIsLoggedIn)


isLoggedIn = ""
booleanIsLoggedIn = Boolean(isLoggedIn) /* "" => false */
console.log(booleanIsLoggedIn)

isLoggedIn = "dileep"
booleanIsLoggedIn = Boolean(isLoggedIn) /* "dileep" => true*/
console.log(booleanIsLoggedIn)



let someNumber = 33

let stringNumber = String(someNumber) /* converted to number (33 => "33") */
console.log(stringNumber) 
console.log(typeof stringNumber)


someNumber = null

stringNumber = String(someNumber) /*  (null => "null") */
console.log(stringNumber) 
console.log(typeof stringNumber)



someNumber = undefined

stringNumber = String(someNumber) /* (undefined => "undefined") */
console.log(typeof stringNumber)



