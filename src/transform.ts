export const transform = (content: string, dictionary: Map<string, string>): string => {
  let result = '';
  const parts: string[] = content.split('');

  parts.forEach((part) => {
    const partKey = part !== 'R' ? part.toLocaleLowerCase() : part;

    if (dictionary.has(partKey)) {
      result += dictionary.get(partKey);
    } else {
      result += part;
    }
  });

  return result;
};

export default transform;
