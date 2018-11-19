const camelCaseize = require('lodash.camelcase');
const fs = require('fs');
// from https://github.com/minimaxir/big-list-of-naughty-strings
const naughtyStrings = fs.readFileSync('./data/blns.base64.txt').toString().split('\n');
const naughtySections = [];
let naughtySectionMap = {};
let comment = false;
let method = '';
for (let naughty of naughtyStrings) {
    if (comment === false && naughty.indexOf('#') === 0) {
        comment = true;
        method = camelCaseize(naughty.substring(2));
        naughtySections.push(method);
        naughtySectionMap[method] = [];
    } else if (comment === true && naughty.includes('#')) {
    } else {
        comment = false;
        if (naughty === '') {
            continue;
        }
        naughtySectionMap[method].push(naughty);
    }
}

fs.writeFileSync('./mapped_strings.json', JSON.stringify(naughtySectionMap));