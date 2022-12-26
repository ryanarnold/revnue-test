function fizzbuzz(n) {
  for (let i = 1; i < n + 1; i++) {
    if (i % 3 === 0) {
      process.stdout.write('Fizz');
    }

    if (i % 5 === 0) {
      process.stdout.write('Buzz');
    }

    if (i % 3 !== 0 && i % 5 !== 0) {
      process.stdout.write(i.toString());
    }

    process.stdout.write('\n');
  }
}

fizzbuzz(100);
