export const getLettersToRunesMapping = (): Map<string, string> => {
  const letterMapping = new Map();
  letterMapping.set('a', '⸝');
  letterMapping.set('á', '⸝');
  letterMapping.set('b', 'ˏ');
  letterMapping.set('c', '╵');
  letterMapping.set('d', '⸍');
  letterMapping.set('ð', 'ו');
  letterMapping.set('e', 'ᛁ');
  letterMapping.set('é', 'ᛁ');
  letterMapping.set('f', 'ᛙ');
  letterMapping.set('g', 'ᛍ');
  letterMapping.set('h', 'ᚽ');
  letterMapping.set('i', 'ᛁ');
  letterMapping.set('í', 'ᛁ');
  letterMapping.set('j', 'ᛁ');
  letterMapping.set('k', 'ᛍ');
  letterMapping.set('l', '⸌');
  letterMapping.set('m', '⠃');
  letterMapping.set('n', '⸜');
  letterMapping.set('o', 'ˎ');
  letterMapping.set('ó', 'ˎ');
  letterMapping.set('p', 'ˏ');
  letterMapping.set('q', 'ᛍ');
  letterMapping.set('r', '⡄');
  letterMapping.set('s', '╵');
  letterMapping.set('t', '⸍');
  letterMapping.set('þ', 'ו');
  letterMapping.set('u', '╮');
  letterMapping.set('ú', '╮');
  letterMapping.set('v', '╮');
  letterMapping.set('w', '╮');
  letterMapping.set('x', '╵');
  letterMapping.set('y', '╮');
  letterMapping.set('ý', '╮');
  letterMapping.set('z', '╵');
  letterMapping.set('å', 'ˎ');
  letterMapping.set('ä', '⸝');
  letterMapping.set('æ', '⸝');
  letterMapping.set('ö', 'ˎ');
  letterMapping.set('ø', 'ˎ');
  letterMapping.set('ǫ', 'ˎ');
  letterMapping.set(' ', ':');

  return letterMapping;
};

export default {
  getLettersToRunesMapping,
};
