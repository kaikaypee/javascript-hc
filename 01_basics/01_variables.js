const accountId = 144663
let accoountEmail = "kay@gmail.com"
var accountPassword = "1234"
accountCity = "Mumbai"
let accountState;

/* Prefer not to use var because of issue in BLOCK SCOPE and FUNCTIONAL SCOPE.
*/

// accountId = 2 // not allowed

accoountEmail = "pee@gmail.com"
accountPassword = "4321"
accountCity = "Bengaluru"

console.log(accountId);

console.table([accountId, accoountEmail, accountPassword, accountCity, accountState]);