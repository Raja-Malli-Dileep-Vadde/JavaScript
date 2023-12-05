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


/******************************* Operations *************************************/

let value = 3
let negValue = -value
console.log(negValue)


console.log( 2 + 2 ) 
console.log( 2 - 2 ) 
console.log( 2 * 2 ) 
console.log( 2 / 2 ) 
console.log( 2 % 2 ) // Remainder
console.log( 2 ** 2 ) // power 


let str1 = "Hello"
let str2 = " Dileep" 

str3 = str1 + str2 
console.log(str3)


console.log( "1" + 2 )
console.log( 1 + "2" )
console.log( 1 + 2 + "2" )  /* => number + number + string = string */

console.log( "1" + 2 + 2)   /* => string + number + number = string */

console.log( ( 3 + 4 ) * 5 % 3 )


console.log( +true )  /*  ( +true  => 0 )   */
// console.log( true+ ) => 'error'

console.log( +"" ) /*   ( +"" => 0 )   */

let num1 , num2 , num3

num1 = num2 = num3 = 2 + 2 /* not fine way to use */

console.table([num1 ,num2 ,num3])


let gameCounter = 100
gameCounter++
console.log(gameCounter)
++gameCounter
console.log(gameCounter)

 







