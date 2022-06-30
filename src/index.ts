import { getLettersToRunesMapping } from './mappings/letters-to-runes';
import { getRunesToLettersMapping } from './mappings/runes-to-letters';
import { transform } from './transform';

export const lettersToRunes = (
  content: string,
): string => transform(content, getLettersToRunesMapping());

export const runesToLetters = (
  content: string,
): string => transform(content, getRunesToLettersMapping());

export default {
  lettersToRunes,
  runesToLetters,
  getLetterMapping: getLettersToRunesMapping,
  getRuneMapping: getRunesToLettersMapping,
};
