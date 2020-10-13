const CustomError = require("../extensions/custom-error");

module.exports = function countCats( /* matrix */ ) {
    let count = 0

    arguments[0].forEach(element => {

        element.forEach(elemInElem => {
            if (elemInElem === "^^") {
                count++
            }
        })
    });
    return count
};