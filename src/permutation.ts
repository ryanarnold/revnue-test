function isPermutation(str1: string, str2: string) {
  if (str1.length !== str2.length) {
    return false;
  }

  const map = {};

  for (const c of str1) {
    map[c] = map[c] === undefined ? 1 : map[c] + 1;
  }

  for (const c of str2) {
    if (Object.keys(map).includes(c)) {
      map[c] -= 1;

      if (map[c] < 0) {
        return false;
      }
    } else {
      return false;
    }
  }

  return true;
}

const testCases = [
  ['abc', 'cba'],
  ['test', 'sett'],
  ['ball', 'llaa'],
  ['hello', 'ohell'],
  ['debitcard', 'badcredit'],
  ['hell', 'hello'],
];

testCases.forEach((test) => {
  console.log(isPermutation(test[0], test[1]));
});
