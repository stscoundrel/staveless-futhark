import stavelessFuthark from '../src';

describe('Letters to runes transformation tests', () => {
  test('Does not transform not-found characters', () => {
    const original = '12345$∞§|[]]≈≈';

    const result = stavelessFuthark.lettersToRunes(original);

    expect(result).toBe(original);
  });

  test('Transforms letters to runes', () => {
    const content = 'aábcdðeéfghiíjklmnoópqrRstþuúvwxyýzåäæöøǫþ ';
    const expected = '⸝⸝ˏ╵⸍וᛁᛁᛙᛍᚽᛁᛁᛁᛍ⸌⠃⸜ˎˎˏᛍ◟⡄╵⸍ו╮╮╮╮╵╮╮╵ˎ⸝⸝ˎˎˎו:';

    const result = stavelessFuthark.lettersToRunes(content);

    expect(result).toBe(expected);
  });

  test('Transforms Old Norse text to staveless runes', () => {
    const content = 'kuþniutr þru sun lit rita stin þina ak bru kirþi aftiʀ bruþr sina asbiurn ak at kuþlaf';
    const expected = 'ᛍ╮ו⸜ᛁ╮⸍◟:ו◟╮:╵╮⸜:⸌ᛁ⸍:◟ᛁ⸍⸝:╵⸍ᛁ⸜:וᛁ⸜⸝:⸝ᛍ:ˏ◟╮:ᛍᛁ◟וᛁ:⸝ᛙ⸍ᛁʀ:ˏ◟╮ו◟:╵ᛁ⸜⸝:⸝╵ˏᛁ╮◟⸜:⸝ᛍ:⸝⸍:ᛍ╮ו⸌⸝ᛙ';

    const result = stavelessFuthark.lettersToRunes(content);

    expect(result).toBe(expected);
  });
});
