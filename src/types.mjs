// this file is for checking types so that Hangul can error correctly
export const Character = (inp) => {
  const str = `${inp}`;
  if (str.length !== 1) {
    throw Error("Strings longer than one aren't Characters");
  }
  return str;
};
// Character: * => String
export const CharacterGroup = (ary) => {
  if (Array.isArray(ary) || typeof ary === 'string') {
    return Array.from(ary);
  }
  throw TypeError('A character group must be a String or Array');
};
// CharacterGroup * => Array
