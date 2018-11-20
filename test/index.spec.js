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
            expect(naughty.emoji()).to.be.a.string;
        });

        it('should return many items if argument is >0', function() {
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
