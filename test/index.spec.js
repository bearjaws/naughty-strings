const chai = require('chai');
const expect = chai.expect;
const naughty = require('../index');

let methods = [
    'reservedStrings',
    'numericStrings',
    'specialCharacters',
    'unicodeSymbols',
    'quotationMarks',
    'twoByteCharacters',
    'japaneseEmoticons',
    'emoji',
    'regionalIndicatorSymbols',
    'unicodeNumbers',
    'rightToLeftStrings',
    'trickUnicode',
    'zalgoText',
    'unicodeUpsidedown',
    'unicodeFont',
    'scriptInjection',
    'sqlInjection',
    'serverCodeInjection',
    'commandInjectionRuby',
    'xxeInjectionXml',
    'unwantedInterpolation',
    'fileInclusion',
    'knownCvEsAndVulnerabilities',
    'msdosWindowsSpecialFilenames',
    'ircSpecificStrings',
    'scunthorpeProblem',
    'humanInjection',
    'terminalEscapeCodes',
    'iOsVulnerability',
    '_getItems',
    'length',
    'name',
    'unicodeSubscriptSuperscriptAccents',
    'prototype'
];


describe('Naughty', function() {
    describe('class definition', function(){
        it('should have a consistent set of methods', function() {
            expect(Object.getOwnPropertyNames(naughty).sort()).to.deep.equal(methods.sort());
        });
    });

    describe('class functionality', function() {
        it('should return one item if no argument is passed', function() {
            let emoji = naughty.emoji();
            let found = naughty.emoji(false).indexOf(emoji);
            expect(emoji).to.be.a.string;
            expect(found).to.be.greaterThan(-1);
        });

        it('should not run out of elements', function() {
            let emojis = [];
            for (let x = 0; x < 100; x++) {
                emojis.push(naughty.emoji());
            }
            expect(emojis.length).to.equal(100);
            expect(emojis[99]).to.be.a.string;
            let found = naughty.emoji(false).indexOf(emojis[99]);
            expect(found).to.be.greaterThan(-1);
        });

        it('should return many items if argument is >0', function() {
            console.log(naughty.emoji(4));// every build can use some emojis
            expect(naughty.emoji(4)).to.be.an('array');
        });

        it('should return all items if argument === 0', function() {
            expect(naughty.emoji(0)).to.be.an('array');
        });

        it('should return all items if argument is not a number', function() {
            expect(naughty.emoji('dsdddsf')).to.be.an('array');
        });
    })
});
