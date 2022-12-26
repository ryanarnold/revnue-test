function reverse(str: string) {
  if (str.length === 0) {
    return '';
  }
  return reverse(str.substring(1)) + str[0];
}

const reverseTestCases = ['hello', 'world', 'ryan', 'arnold', 'zoleta', 'revnue'];

reverseTestCases.forEach((test) => {
  console.log(reverse(test));
});

// time complexity of O(n**2)
