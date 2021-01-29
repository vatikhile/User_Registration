class Utility {
    name = (firstName) => {
        let FIRST_NAME_PATTERN = /^[A-Z]{1}[a-z]{2,}$/

        if (firstName.match(FIRST_NAME_PATTERN)) {
            console.log(`valid ${firstName} Name`);
        }
        else {
            console.log(`Invalid ${firstName} Name`);
        }
        return FIRST_NAME_PATTERN;

    }
    email = (email) => {
        let EMAIL_PATTERN = /^[a-zA-Z0-9]+([.][a-zA-Z0-9]+)?@[a-zA-Z0-9]+.[a-zA-Z]{2,4}([.][a-zA-Z]{2})?$/

        if (email.match(EMAIL_PATTERN)) {
            console.log("valid Email");
        }
        else {
            console.log("Invalid Email");
        }
        return EMAIL_PATTERN;

    }
}
module.exports = new Utility();