import stavelessFuthark from '../src';

describe('Letters to runes transformation tests', () => {
  test('Does not transform not-found characters', () => {
    const original = '12345$∞§|[]]≈≈';

    const result = stavelessFuthark.lettersToRunes(original);

    expect(result).toBe(original);
  });

  test('Transforms letters to runes', () => {
    const content = 'aábcdðeéfghiíjklmnoópqrstþuúvwxyýzåäæöøǫþ ';
    const expected = '⸝⸝ˏ╵⸍וᛁᛁᛙᛍᚽᛁᛁᛁᛍ⸌⠃⸜ˎˎˏᛍ⡄╵⸍ו╮╮╮╮╵╮╮╵ˎ⸝⸝ˎˎˎו:';

    const result = stavelessFuthark.lettersToRunes(content);

    expect(result).toBe(expected);
  });
});
