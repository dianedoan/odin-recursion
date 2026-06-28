function fibs(num) {
  if (num === 0) return [0];

  let sequence = [0, 1];

  for (let i = 2; i <= num; i++) {
    sequence.push(sequence[i-1] + sequence[i-2]);
  };
  return sequence;
}

console.log(fibs(0));
console.log(fibs(1));
console.log(fibs(2));
console.log(fibs(3));
console.log(fibs(4));

function fibsRec(num) {
  // base cases
  if (num === 0) return [0];
  if (num === 1) return [0, 1];

  // recursive case
  const sequence = fibsRec(num - 1);
  sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]);

  return sequence;
}

console.log(fibsRec(0));
console.log(fibsRec(1));
console.log(fibsRec(2));
console.log(fibsRec(3));
console.log(fibsRec(4));
