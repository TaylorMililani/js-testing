const isPalindrome = function (text) {
    const reverse = text.split('').reverse().join('')
    return text === reverse;
};

module.exports = isPalindrome;

