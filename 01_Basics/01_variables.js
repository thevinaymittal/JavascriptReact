const accountId = 4472
let accountEmail = "ervinmittal@gmail.com"
var accountPass  = "abcd`"
accountCity      = "Jaipur"
let accountState 
/*
1. Line 3  : Prefer not to use var because of issue in block scope and functional scope
2. Line 4  : Prefer not to directly call variable let it come via let
3. Line 11 : You cannot re assign value if already declared as in line 4
*/
// accountId = 2

console.log(accountId);
console.table([accountEmail,accountPass,accountCity,accountState])
