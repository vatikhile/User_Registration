console.log("---/* Welcome to User Registration */---");
var readlineSync = require('readline-sync');
const util = require("./utility");
var fName = readlineSync.question( "Enter First name : :");
util.name(fName);
var lName = readlineSync.question( "Enter Last name : :");
util.name(lName);
var email=readlineSync.question("Enter the emailAddress : :")
util.email(email)
var number=readlineSync.question("Enter the Mobile Number : :")
util.mobile(number)
var password=readlineSync.question("Enter the password having min 8 character : :")
util.password_check(password)