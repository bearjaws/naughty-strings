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
let method = '';
for (let naughty of naughtyStrings) {
    if (comment === false && naughty.indexOf('#') === 0) {
        comment = 0;
        method = camelCaseize(naughty.substring(2));

    } else if (comment === 2 && naughty.includes('#')) {
        template += `
### ${naughty.replace('# ', '')}
#### function ${method}(number) {}
`;
    } else if (naughty.includes('#')) {
        comment++;
    } else {
        comment = false;
    }
}

fs.writeFileSync('README.md', template);