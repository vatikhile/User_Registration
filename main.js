console.log("---/* Welcome to User Registration */---");
var readlineSync = require('readline-sync');
const util = require("./utility");
var fName = readlineSync.question( "Enter First name : ");
util.name(fName);
var lName = readlineSync.question( "Enter Last name : ");
util.name(lName);
let email=readlineSync.question("Enter the emailAddress")
util.email(email)