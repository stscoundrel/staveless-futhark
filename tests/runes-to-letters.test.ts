import stavelessFuthark from '../src';

describe('Runes to letters transformation tests', () => {
  test('Transforms runes to letters', () => {
    const content = 'ᛙ╮וˎ⡄ᛍᚽ⸜ᛁ⸝╵⸍ˏ⠃⸌⡄:';
    const expected = 'fuþoRkhniastbmlR ';

    const result = stavelessFuthark.runesToLetters(content);

    expect(result).toBe(expected);
  });

  test('Transforms Old Norse runic inscription', () => {
    const content = '⸌ᛁ⸍:⡄ᛁ⸍⸝:╵⸍ᛁ⸜:וᛁ⸜⸝';
    const expected = 'lit Rita stin þina';

    const result = stavelessFuthark.runesToLetters(content);

    expect(result).toBe(expected);
  });
});
