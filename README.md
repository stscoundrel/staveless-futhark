# Staveless Futhark

Transform latin letters to Staveless Futhark runes & vice versa

### Deprecation notice:

_This library has been discontinued in favor of [Riimut](https://github.com/stscoundrel/riimut). It contains same functionality for all main runic dialects. This library will also remain available in NPM and should keep working just fine._

Other runic alphabets:
- [Younger Futhark](https://github.com/stscoundrel/younger-futhark)
- [Elder Futhark](https://github.com/stscoundrel/elder-futhark)
- [Futhorc (Anglo-Saxon runes)](https://github.com/stscoundrel/futhorc)
- [Futhork (Medieval runes)](https://github.com/stscoundrel/futhork)


### Install

`yarn add staveless-futhark`

#### Usage

You can either transform runes to text, or text to runes.

Latin text to runes:

```typescript
import { lettersToRunes } from 'staveless-futhark'

// From Hög runestone 12.
const result = lettersToRunes('lit rita stin þina')

console.log(result) // ⸌ᛁ⸍:⡄ᛁ⸍⸝:╵⸍ᛁ⸜:וᛁ⸜⸝
```

Runes to latin text:

```typescript
import { runesToLetters } from 'staveless-futhark'

const result = runesToLetters('⸌ᛁ⸍:⡄ᛁ⸍⸝:╵⸍ᛁ⸜:וᛁ⸜⸝')

console.log(result) // lit Rita stin þina
```


### About Staveless Futhark

Staveless runes were simplification of Younger Futhark, a runic alphabet of the viking age. In order to create the staveless runes, vertical marks (or staves) were dropped from individual runes.
