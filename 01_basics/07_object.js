// Objects
const mySymb = Symbol("key1")
const JsUser={
    name:"Raja Malli",
    "Full Name":"Raja Malli Dileep Vadde",
    [mySymb]:"mykey1",
    mySymb1 : mySymb,
    age:25,
    location:"Dornala",
    isLogged:false,
    lastLoginDays:["Monday","Friday","Tuesday"]
    }

   console.log(JsUser.name) 
   console.log(JsUser["name"]) 
   console.log(JsUser["Full Name"])
   console.log(JsUser[mySymb])

JsUser["email"] = "Rajamallidileep@gmail.com"
//    Object.freeze(JsUser)

JsUser["email"] = "vadde888@gmail.com"
console.log(`JsUser ,${JsUser.email}`)

JsUser.greeting = function (){
    console.log("hello Dileep")
 }
//  console.log(`JsUser.greeting ,${JsUser.greeting()}`)  /* fuction can't be directly console.log */
let a = JsUser.greeting() /* function should be assigned to variable for console.log */
console.log(JsUser.greeting()) /* fuction can't be directly console.log */


JsUser.getMyName= function(){
    console.log(`my name is ${this.name}`)
}
let myName= JsUser.getMyName()










