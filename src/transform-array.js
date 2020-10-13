const CustomError = require("../extensions/custom-error");
const { finishChain } = require("./simple-chain");

module.exports = function transform(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('THROW')
    }
    let finishArr = []
    let commandArr = {}
    for (let index = 0; index < arr.length; index++) {
        commandArr[index] = 0
    }
    try {
        for (let index = 0; index < arr.length; index++) {
            switch (arr[index]) {
                case '--discard-next':
                    if (index !== (arr.length - 1)) {
                        commandArr[index + 1] = commandArr[index + 1] - 10
                        commandArr[index] = -10
                    }
                    break;
                case '--discard-prev':
                    if (index !== 0) {
                        commandArr[index - 1] = commandArr[index - 1] - 1
                        commandArr[index] = -10
                    }
                    break;
                case '--double-next':
                    if (index !== (arr.length - 1)) {
                        commandArr[index + 1] = commandArr[index + 1] + 1
                        commandArr[index] = -10
                    }
                    break;
                case '--double-prev':
                    if (index !== 0) {
                        commandArr[index - 1] = commandArr[index - 1] + 1
                        commandArr[index] = -10
                    }
                    break;
                default:
                    commandArr[index] = commandArr[index] + 1
                    break;
            }
        }
        for (let index = 0; index < arr.length; index++) {
            if (commandArr[index] > 0) {
                for (let indexCom = 0; indexCom < commandArr[index]; indexCom++) {
                    finishArr.push(arr[index])
                }
            }

        }
    } catch (error) {
        return error
    }


    return finishArr
};