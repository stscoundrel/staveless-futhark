import { getLettersToRunesMapping } from './mappings/letters-to-runes';
import { transform } from './transform';

export const lettersToRunes = (
  content: string,
): string => transform(content, getLettersToRunesMapping());

export default {
  lettersToRunes,
  getLetterMapping: getLettersToRunesMapping,
};
