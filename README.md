# Naughty-Strings

## Useful for testing applications against special characters, invisible white space, emojis, etc...
From github: https://github.com/minimaxir/big-list-of-naughty-strings/blob/master/blns.txt


## Usage
```javascript
const strings = require('naughty-strings');

console.log(strings.emoji()); = '😍'
```
If a number is passed into the function call it will return an array with the number of elements.




### contexts. Divided into three groups based on (US-layout) keyboard position.
#### function specialCharacters(number) {}

### or reused for internal delimiters on the theory that they should never
#### function nonWhitespaceC0ControlsU0001ThroughU0008U000EThroughU001F(number) {}

### appear in input.
#### function nonWhitespaceC0ControlsU0001ThroughU0008U000EThroughU001F(number) {}

### The next line may appear to be blank or mojibake in some viewers.
#### function nonWhitespaceC0ControlsU0001ThroughU0008U000EThroughU001F(number) {}

### treated as whitespace in some contexts.
#### function whitespaceAllOfTheCharactersWithCategoryZsZlOrZpInUnicode(number) {}

### This file unfortunately cannot express strings containing
#### function whitespaceAllOfTheCharactersWithCategoryZsZlOrZpInUnicode(number) {}

### U+0000, U+000A, or U+000D (NUL, LF, CR).
#### function whitespaceAllOfTheCharactersWithCategoryZsZlOrZpInUnicode(number) {}

### The next line may appear to be blank or mojibake in some viewers.
#### function whitespaceAllOfTheCharactersWithCategoryZsZlOrZpInUnicode(number) {}

### The next line may be flagged for "trailing whitespace" in some viewers.
#### function whitespaceAllOfTheCharactersWithCategoryZsZlOrZpInUnicode(number) {}

### #
#### function specialUnicodeCharactersUnion(number) {}

### #	表          CJK_UNIFIED_IDEOGRAPHS (U+8868)
#### function specialUnicodeCharactersUnion(number) {}

### #	ポ          KATAKANA LETTER PO (U+30DD)
#### function specialUnicodeCharactersUnion(number) {}

### #	あ          HIRAGANA LETTER A (U+3042)
#### function specialUnicodeCharactersUnion(number) {}

### #	A           LATIN CAPITAL LETTER A (U+0041)
#### function specialUnicodeCharactersUnion(number) {}

### #	鷗          CJK_UNIFIED_IDEOGRAPHS (U+9DD7)
#### function specialUnicodeCharactersUnion(number) {}

### #	Œ           LATIN SMALL LIGATURE OE (U+0153) 
#### function specialUnicodeCharactersUnion(number) {}

### #	é           LATIN SMALL LETTER E WITH ACUTE (U+00E9)
#### function specialUnicodeCharactersUnion(number) {}

### #	Ｂ           FULLWIDTH LATIN CAPITAL LETTER B (U+FF22)
#### function specialUnicodeCharactersUnion(number) {}

### #	逍          CJK_UNIFIED_IDEOGRAPHS (U+900D)
#### function specialUnicodeCharactersUnion(number) {}

### #	Ü           LATIN SMALL LETTER U WITH DIAERESIS (U+00FC)
#### function specialUnicodeCharactersUnion(number) {}

### #	ß           LATIN SMALL LETTER SHARP S (U+00DF)
#### function specialUnicodeCharactersUnion(number) {}

### #	ª           FEMININE ORDINAL INDICATOR (U+00AA)
#### function specialUnicodeCharactersUnion(number) {}

### #	ą           LATIN SMALL LETTER A WITH OGONEK (U+0105)
#### function specialUnicodeCharactersUnion(number) {}

### #	ñ           LATIN SMALL LETTER N WITH TILDE (U+00F1)
#### function specialUnicodeCharactersUnion(number) {}

### #	丂          CJK_UNIFIED_IDEOGRAPHS (U+4E02)
#### function specialUnicodeCharactersUnion(number) {}

### #	㐀          CJK Ideograph Extension A, First (U+3400)
#### function specialUnicodeCharactersUnion(number) {}

### #	𠀀          CJK Ideograph Extension B, First (U+20000)
#### function specialUnicodeCharactersUnion(number) {}

### fonts, and have a number of special behaviors
#### function regionalIndicatorSymbols(number) {}
