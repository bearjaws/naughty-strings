const fs = require('fs');
const stringsJson = require('./mapped_strings');
const functionSectionMap = {
    'unicode': [
        'nonWhitespaceC0ControlsU0001ThroughU0008U000EThroughU001F',
        'nonWhitespaceC1ControlsU0080ThroughU0084AndU0086ThroughU009F',
        'specialUnicodeCharactersUnion',
        'unicodeAdditionalControlCharactersAllOfTheCharactersWith',
        'whitespaceAllOfTheCharactersWithCategoryZsZlOrZpInUnicode'
    ],
    'byteOrder': ['byteOrderMarksUFeffAndUFffeEachOnItsOwnLine'],
};

let ignoredKeys = [];

for (let key of Object.keys(functionSectionMap)) {
    ignoredKeys = ignoredKeys.concat(functionSectionMap[key]);
}

let index = `// This class is autogenerated from generate-class.js, all changes here will be overwritten on build.

const sample = require('lodash.samplesize');
const isNumber = require('lodash.isNumber');
const stringsJson = require('./mapped_strings');

class NaughtyStrings {

    static _getItems(key, number) {
        if (!isNumber(number) || number === 0) {
            number = stringsJson[key].length
        } else if (number === 1) {
            return Buffer.from(sample(stringsJson[key], 1)[0], 'base64').toString();
        }
        let selected = sample(stringsJson[key], number);
        let stringified = [];
        for (let string of selected) {
            stringified.push(Buffer.from(string, 'base64').toString())
        }
        return stringified;
    }
`;

for (let key of Object.keys(stringsJson)) {
    if (ignoredKeys.indexOf(key) !== -1) {
        continue;
    }
    // tabbed in to clean up white space formatting in generated class.
    index += `
    static ${key}(number = 1) {
        return this._getItems('${key}', number);
    }
    `;
}


index += `
}
module.exports = NaughtyStrings;
`;

fs.writeFileSync('./index.js', index);
