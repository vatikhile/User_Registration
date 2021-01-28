class Utility{
     firstName(fname) {
        let FIRST_NAME_PATTERN = new RegExp("^[A-Z]{1}[a-z]{2,}$");

        if (FIRST_NAME_PATTERN.test(fname)) {
            console.log("valid First Name");
        }
        else {
            console.log("Invalid First Name");
        }
        return FIRST_NAME_PATTERN;
       
    }
}
module.exports = new Utility();