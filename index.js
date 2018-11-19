
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

    reservedStrings(number) {
        let key = 'reservedStrings';
        return getItems(key, number);
    }
    
    numericStrings(number) {
        let key = 'numericStrings';
        return getItems(key, number);
    }
    
    specialCharacters(number) {
        let key = 'specialCharacters';
        return getItems(key, number);
    }
    
    whitespaceAllOfTheCharactersWithCategoryZsZlOrZpInUnicode(number) {
        let key = 'whitespaceAllOfTheCharactersWithCategoryZsZlOrZpInUnicode';
        return getItems(key, number);
    }
    
    unicodeSymbols(number) {
        let key = 'unicodeSymbols';
        return getItems(key, number);
    }
    
    unicodeSubscriptSuperscriptAccents(number) {
        let key = 'unicodeSubscriptSuperscriptAccents';
        return getItems(key, number);
    }
    
    quotationMarks(number) {
        let key = 'quotationMarks';
        return getItems(key, number);
    }
    
    twoByteCharacters(number) {
        let key = 'twoByteCharacters';
        return getItems(key, number);
    }
    
    japaneseEmoticons(number) {
        let key = 'japaneseEmoticons';
        return getItems(key, number);
    }
    
    emoji(number) {
        let key = 'emoji';
        return getItems(key, number);
    }
    
    regionalIndicatorSymbols(number) {
        let key = 'regionalIndicatorSymbols';
        return getItems(key, number);
    }
    
    unicodeNumbers(number) {
        let key = 'unicodeNumbers';
        return getItems(key, number);
    }
    
    rightToLeftStrings(number) {
        let key = 'rightToLeftStrings';
        return getItems(key, number);
    }
    
    trickUnicode(number) {
        let key = 'trickUnicode';
        return getItems(key, number);
    }
    
    zalgoText(number) {
        let key = 'zalgoText';
        return getItems(key, number);
    }
    
    unicodeUpsidedown(number) {
        let key = 'unicodeUpsidedown';
        return getItems(key, number);
    }
    
    unicodeFont(number) {
        let key = 'unicodeFont';
        return getItems(key, number);
    }
    
    scriptInjection(number) {
        let key = 'scriptInjection';
        return getItems(key, number);
    }
    
    sqlInjection(number) {
        let key = 'sqlInjection';
        return getItems(key, number);
    }
    
    serverCodeInjection(number) {
        let key = 'serverCodeInjection';
        return getItems(key, number);
    }
    
    commandInjectionRuby(number) {
        let key = 'commandInjectionRuby';
        return getItems(key, number);
    }
    
    xxeInjectionXml(number) {
        let key = 'xxeInjectionXml';
        return getItems(key, number);
    }
    
    unwantedInterpolation(number) {
        let key = 'unwantedInterpolation';
        return getItems(key, number);
    }
    
    fileInclusion(number) {
        let key = 'fileInclusion';
        return getItems(key, number);
    }
    
    knownCvEsAndVulnerabilities(number) {
        let key = 'knownCvEsAndVulnerabilities';
        return getItems(key, number);
    }
    
    msdosWindowsSpecialFilenames(number) {
        let key = 'msdosWindowsSpecialFilenames';
        return getItems(key, number);
    }
    
    ircSpecificStrings(number) {
        let key = 'ircSpecificStrings';
        return getItems(key, number);
    }
    
    scunthorpeProblem(number) {
        let key = 'scunthorpeProblem';
        return getItems(key, number);
    }
    
    humanInjection(number) {
        let key = 'humanInjection';
        return getItems(key, number);
    }
    
    terminalEscapeCodes(number) {
        let key = 'terminalEscapeCodes';
        return getItems(key, number);
    }
    
    iOsVulnerability(number) {
        let key = 'iOsVulnerability';
        return getItems(key, number);
    }
    
}
module.exports = new NaughtyStrings();
