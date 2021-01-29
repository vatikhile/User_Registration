class Utility{
     name=(firstName)=> {
        let FIRST_NAME_PATTERN = /^[A-Z]{1}[a-z]{2,}$/

        if (firstName.match(FIRST_NAME_PATTERN)) {
            console.log(`valid ${firstName} Name`);
        }
        else {
            console.log(`Invalid ${firstName} Name`);
        }
        return FIRST_NAME_PATTERN;
       
    }
}
module.exports = new Utility();