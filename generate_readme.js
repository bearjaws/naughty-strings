const fs = require('fs');
let template = `# Naughty-Strings

## Useful for testing applications against special characters, invisible white space, emojis, etc...
From github: https://github.com/minimaxir/big-list-of-naughty-strings/blob/master/blns.txt


## Usage
\`\`\`javascript

const strings = require('naughty-strings');

console.log(strings.emoji()); = '😍'
\`\`\`
If a number is passed into the function call it will return an array with the number of elements.



`;
const camelCaseize = require('lodash.camelcase');
// from https://github.com/minimaxir/big-list-of-naughty-strings
const naughtyStrings = fs.readFileSync('./data/blns.base64.txt').toString().split('\n');
let comment = false;
let segment = [];
let method = '';
for (let naughty of naughtyStrings) {
    if (comment === false && naughty.indexOf('#') === 0) {
        template += `\`\`\`javascript \n`;
        template += segment.join('\n');
        template += '\n```\n';
        segment = [];
        comment = 0;
        method = camelCaseize(naughty.substring(2));
        segment.push(`function ${method}(number) {}`);
    } else if (naughty.includes('#')) {
        // some strings contain a tab instead of a space.
        if (naughty === '#') {
            continue;
        } else if (naughty.includes('\t')) {
            segment.push(`${naughty.replace('#\t', '')}`);
        } else {
            segment.push(`${naughty.replace('# ', '')}`);
        }
        comment++;
    } else {
        comment = false;
    }
}

fs.writeFileSync('README.md', template);