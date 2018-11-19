const fs = require('fs');
const stringsJson = require('./mapped_strings');
const functionSectionMap = {
    'unicode': [
        'nonWhitespaceC0ControlsU0001ThroughU0008U000EThroughU001F',
        'nonWhitespaceC1ControlsU0080ThroughU0084AndU0086ThroughU009F',
        'specialUnicodeCharactersUnion',
        'unicodeAdditionalControlCharactersAllOfTheCharactersWith',
    ],
    'byteOrder': ['byteOrderMarksUFeffAndUFffeEachOnItsOwnLine'],
};

let ignoredKeys = [];

for (let [key, items] of Object.entries(functionSectionMap)) {
    ignoredKeys = ignoredKeys.concat(items);
}

let index = `
const sample = require('lodash.samplesize');
const stringsJson = require('./mapped_strings');

class NaughtyStrings {

    getItems(key, number) {
        if (number === 0) {
            return stringsJson[key];
        } else if (number === 1) {
            return Buffer.from(sample(this.stringsJson, 1)[0][0], 'base64').toString();
        }
        let selected = sample(this.stringsJson[key], number);
        let stringified = [];
        for (let string of selected) {
            stringified.push(Buffer.from(string, 'base64').toString())
        }
            return stringified;
    }
`;

for (let [key, array] of Object.entries(stringsJson)) {
    if (ignoredKeys.indexOf(key) !== -1) {
        continue;
    }
    // tabbed in to clean up white space formatting in generated class.
    index += `
    ${key}(number) {
        let key = '${key}';
        return getItems(key, number);
    }
    `;

    // NaughtyStrings.prototype[key] = function(number = 1) {
    //     if (number === 0) {
    //         return stringsJson[key];
    //     } else if (number === 1) {
    //         return Buffer.from(sample(this.stringsJson, 1)[0][0], 'base64').toString();
    //     }
    //     let selected = sample(this.stringsJson[key], number);
    //     let stringified = [];
    //     for (let string of selected) {
    //         stringified.push(Buffer.from(string, 'base64').toString())
    //     }
    //     return stringified;
    // }
}


index += `
}
module.exports = new NaughtyStrings();
`;

console.log(index);


fs.writeFileSync('./index.js', index);