const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam( /* members */ ) {
    if (Array.isArray(arguments[0]) === false) return false
    let names = ''
    arguments[0].forEach(element => {
        if (typeof(element) === 'string') {
            names += element.trim().toUpperCase()[0]
        }
    });
    let finish = names.split('').sort().join('')
    return finish
};