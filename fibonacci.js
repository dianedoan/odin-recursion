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
