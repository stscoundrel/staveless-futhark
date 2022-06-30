import stavelessFuthark from '../src';

describe('Runes to letters transformation tests', () => {
  test('Transforms runes to letters', () => {
    const content = 'ᛙ╮וˎ⡄ᛍᚽ⸜ᛁ⸝╵⸍ˏ⠃⸌⡄:';
    const expected = 'fuþoRkhniastbmlR ';

    const result = stavelessFuthark.runesToLetters(content);

    expect(result).toBe(expected);
  });
});
