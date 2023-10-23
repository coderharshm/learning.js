const accountId= 485464 //hum isme change nhi kr sakte hai ek bar jo element de diya wo fix hai
let accountEmail="harshmalviya009@gmail.com" //datatype hume const and let ko use krte hai
var accountpassword="12345" // var ko ab use nhi krte hai js me
accountCity="jaipur"

//accountId=2// Ye chiz allowed nhi hai ki constant variable me hum element change kre.

accountEmail="harshbhai@gm.com"
accountpassword="44521452"
accountCity="Bengluru"

console.log(accountId);

/*
prefer not to use var
because of issue in block scope and functional
scope
*/


console.table([accountEmail,accountpassword,accountCity])

