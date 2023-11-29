const accountId = 14121315
let accountEmail = "rajamallidileep@gmail.com"
var accountPassword = "1223334444" 
 /* Prefer not to use 'var'  because of issue in block scope and functional scope*/

 accountCity = "Dornala" /* this is not correct way to assign (declare) */

 let accountState; /* value is defined */





// accountId = 123450678910    /* constant variable(locked) cannot re-assign again */

console.log(accountId)


accountEmail = "raja886@gmail.com"
accountPassword = "0123456789"
accountCity = "Hyderabad"
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]) /* to console multi variables */