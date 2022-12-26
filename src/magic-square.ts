function sumArray(arr: Array<number>): number {
  return arr.reduce((previousValue, currentValue) => {
    return currentValue + previousValue;
  });
}

function isMagic(square) {
  const firstRowSum = square[0].reduce((previousValue, currentValue) => {
    return currentValue + previousValue;
  });

  for (let i = 0; i < square.length; i++) {
    if (sumArray(square[i]) !== firstRowSum) {
      return false;
    }

    const cols = [];
    for (let j = 0; j < square[i].length; j++) {
      cols.push(square[j][i]);
    }

    if (sumArray(cols) !== firstRowSum) {
      return false;
    }
  }

  const diagonal1 = [];
  const diagonal2 = [];
  for (let i = 0; i < square.length; i++) {
    diagonal1.push(square[i][i]);
    diagonal2.push(square[i][square.length - (i + 1)]);
  }

  if (sumArray(diagonal1) !== firstRowSum) {
    return false;
  }

  if (sumArray(diagonal2) !== firstRowSum) {
    return false;
  }

  return true;
}
const s = [
  [2, 7, 6],
  [9, 5, 1],
  [4, 3, 8],
];
console.log(isMagic(s));
