# Naughty-Strings

## Useful for testing applications against special characters, invisible white space, emojis, etc...
From github: https://github.com/minimaxir/big-list-of-naughty-strings/blob/master/blns.txt


## Usage
```javascript

const strings = require('naughty-strings');

console.log(strings.emoji()); = '😍'
```
If a number is passed into the function call it will return an array with the number of elements.



```javascript 

```
```javascript 
function reservedStrings(number) {}
Strings which may be used elsewhere in code
```
```javascript 
function numericStrings(number) {}
Strings which can be interpreted as numeric
```
```javascript 
function specialCharacters(number) {}
ASCII punctuation. All of these characters may need to be escaped in some
contexts. Divided into three groups based on (US-layout) keyboard position.
```
```javascript 
function nonWhitespaceC0ControlsU0001ThroughU0008U000EThroughU001F(number) {}
and U+007F (DEL)
Often forbidden to appear in various text-based file formats (e.g. XML),
or reused for internal delimiters on the theory that they should never
appear in input.
The next line may appear to be blank or mojibake in some viewers.
```
```javascript 
function nonWhitespaceC1ControlsU0080ThroughU0084AndU0086ThroughU009F(number) {}
Commonly misinterpreted as additional graphic characters.
The next line may appear to be blank, mojibake, or dingbats in some viewers.
```
```javascript 
function whitespaceAllOfTheCharactersWithCategoryZsZlOrZpInUnicode(number) {}
version 8.0.0), plus U+0009 (HT), U+000B (VT), U+000C (FF), U+0085 (NEL),
and U+200B (ZERO WIDTH SPACE), which are in the C categories but are often
treated as whitespace in some contexts.
This file unfortunately cannot express strings containing
U+0000, U+000A, or U+000D (NUL, LF, CR).
The next line may appear to be blank or mojibake in some viewers.
The next line may be flagged for "trailing whitespace" in some viewers.
```
```javascript 
function unicodeAdditionalControlCharactersAllOfTheCharactersWith(number) {}
general category Cf (in Unicode 8.0.0).
The next line may appear to be blank or mojibake in some viewers.
```
```javascript 
function byteOrderMarksUFeffAndUFffeEachOnItsOwnLine(number) {}
The next two lines may appear to be blank or mojibake in some viewers.
```
```javascript 
function unicodeSymbols(number) {}
Strings which contain common unicode symbols (e.g. smart quotes)
```
```javascript 
function unicodeSubscriptSuperscriptAccents(number) {}
Strings which contain unicode subscripts/superscripts; can cause rendering issues
```
```javascript 
function quotationMarks(number) {}
Strings which contain misplaced quotation marks; can cause encoding errors
```
```javascript 
function twoByteCharacters(number) {}
Strings which contain two-byte characters: can cause rendering issues or character-length issues
```
```javascript 
function specialUnicodeCharactersUnion(number) {}
A super string recommended by VMware Inc. Globalization Team: can effectively cause rendering issues or character-length issues to validate product globalization readiness.
表          CJK_UNIFIED_IDEOGRAPHS (U+8868)
ポ          KATAKANA LETTER PO (U+30DD)
あ          HIRAGANA LETTER A (U+3042)
A           LATIN CAPITAL LETTER A (U+0041)
鷗          CJK_UNIFIED_IDEOGRAPHS (U+9DD7)
Œ           LATIN SMALL LIGATURE OE (U+0153) 
é           LATIN SMALL LETTER E WITH ACUTE (U+00E9)
Ｂ           FULLWIDTH LATIN CAPITAL LETTER B (U+FF22)
逍          CJK_UNIFIED_IDEOGRAPHS (U+900D)
Ü           LATIN SMALL LETTER U WITH DIAERESIS (U+00FC)
ß           LATIN SMALL LETTER SHARP S (U+00DF)
ª           FEMININE ORDINAL INDICATOR (U+00AA)
ą           LATIN SMALL LETTER A WITH OGONEK (U+0105)
ñ           LATIN SMALL LETTER N WITH TILDE (U+00F1)
丂          CJK_UNIFIED_IDEOGRAPHS (U+4E02)
㐀          CJK Ideograph Extension A, First (U+3400)
𠀀          CJK Ideograph Extension B, First (U+20000)
```
```javascript 
function japaneseEmoticons(number) {}
Strings which consists of Japanese-style emoticons which are popular on the web
```
```javascript 
function emoji(number) {}
Strings which contain Emoji; should be the same behavior as two-byte characters, but not always
```
```javascript 
function regionalIndicatorSymbols(number) {}
Regional Indicator Symbols can be displayed differently across
fonts, and have a number of special behaviors
```
```javascript 
function unicodeNumbers(number) {}
Strings which contain unicode numbers; if the code is localized, it should see the input as numeric
```
```javascript 
function rightToLeftStrings(number) {}
Strings which contain text that should be rendered RTL if possible (e.g. Arabic, Hebrew)
```
```javascript 
function trickUnicode(number) {}
Strings which contain unicode with unusual properties (e.g. Right-to-left override) (c.f. http://www.unicode.org/charts/PDF/U2000.pdf)
```
```javascript 
function zalgoText(number) {}
Strings which contain "corrupted" text. The corruption will not appear in non-HTML text, however. (via http://www.eeemo.net)
```
```javascript 
function unicodeUpsidedown(number) {}
Strings which contain unicode with an "upsidedown" effect (via http://www.upsidedowntext.com)
```
```javascript 
function unicodeFont(number) {}
Strings which contain bold/italic/etc. versions of normal characters
```
```javascript 
function scriptInjection(number) {}
Strings which attempt to invoke a benign script injection; shows vulnerability to XSS
```
```javascript 
function sqlInjection(number) {}
Strings which can cause a SQL injection if inputs are not sanitized
```
```javascript 
function serverCodeInjection(number) {}
Strings which can cause user to run code on server as a privileged user (c.f. https://news.ycombinator.com/item?id=7665153)
```
```javascript 
function commandInjectionRuby(number) {}
Strings which can call system commands within Ruby/Rails applications
```
```javascript 
function xxeInjectionXml(number) {}
String which can reveal system files when parsed by a badly configured XML parser
```
```javascript 
function unwantedInterpolation(number) {}
Strings which can be accidentally expanded into different strings if evaluated in the wrong context, e.g. used as a printf format string or via Perl or shell eval. Might expose sensitive data from the program doing the interpolation, or might just represent the wrong string.
```
```javascript 
function fileInclusion(number) {}
Strings which can cause user to pull in files that should not be a part of a web server
```
```javascript 
function knownCvEsAndVulnerabilities(number) {}
Strings that test for known vulnerabilities
```
```javascript 
function msdosWindowsSpecialFilenames(number) {}
Strings which are reserved characters in MSDOS/Windows
```
```javascript 
function ircSpecificStrings(number) {}
Strings that may occur on IRC clients that make security products freak out
```
```javascript 
function scunthorpeProblem(number) {}
Innocuous strings which may be blocked by profanity filters (https://en.wikipedia.org/wiki/Scunthorpe_problem)
```
```javascript 
function humanInjection(number) {}
Strings which may cause human to reinterpret worldview
```
```javascript 
function terminalEscapeCodes(number) {}
Strings which punish the fools who use cat/type on this file
```
