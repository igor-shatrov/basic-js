const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
    if (typeof(sampleActivity) !== 'string' || parseInt(sampleActivity) !== 'number') return false
    if (parseInt(sampleActivity) > 15 || parseInt(sampleActivity) <= 0) return false
    return Math.ceil(Math.log(15 - parseInt(sampleActivity)) / (MODERN_ACTIVITY / HALF_LIFE_PERIOD))
};