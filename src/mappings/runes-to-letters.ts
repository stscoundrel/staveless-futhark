export const getRunesToLettersMapping = (): Map<string, string> => {
  const runeMapping = new Map();

  runeMapping.set('ᛙ', 'f');
  runeMapping.set('╮', 'u');
  runeMapping.set('ו', 'þ');
  runeMapping.set('ˎ', 'o');
  runeMapping.set('◟', 'r');
  runeMapping.set('ᛍ', 'k');
  runeMapping.set('ᚽ', 'h');
  runeMapping.set('⸜', 'n');
  runeMapping.set('ᛁ', 'i');
  runeMapping.set('⸝', 'a');
  runeMapping.set('╵', 's');
  runeMapping.set('⸍', 't');
  runeMapping.set('ˏ', 'b');
  runeMapping.set('⠃', 'm');
  runeMapping.set('⸌', 'l');
  runeMapping.set('⡄', 'R');
  runeMapping.set(':', ' ');
  return runeMapping;
};

export default {
  getRunesToLettersMapping,
};
