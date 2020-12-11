const isPangram = function(text) {
    const letters = text.toLowerCase().match(/[a-z]/g);

    const alphabet = [...new Set(letters)]

    return alphabet.length === 26;
};

module.exports = isPangram;
