import { fibs, fibsRec } from "./fibonacci";

test('iterative fibonacci 0 sequence', () => {
  expect(fibs(0)).toEqual([0]);
});

test('iterative fibonacci 1 sequence', () => {
  expect(fibs(1)).toEqual([0, 1]);
});

test('iterative fibonacci 2 sequence', () => {
  expect(fibs(2)).toEqual([0, 1, 1]);
});

test('iterative fibonacci 3 sequence', () => {
  expect(fibs(3)).toEqual([0, 1, 1, 2]);
});

test('iterative fibonacci 4 sequence', () => {
  expect(fibs(4)).toEqual([0, 1, 1, 2, 3]);
});

test('iterative fibonacci 5 sequence', () => {
  expect(fibs(5)).toEqual([0, 1, 1, 2, 3, 5]);
});

test('recursive fibonacci 0 sequence', () => {
  expect(fibsRec(0)).toEqual([0]);
});

test('recursive fibonacci 1 sequence', () => {
  expect(fibsRec(1)).toEqual([0, 1]);
});

test('recursive fibonacci 2 sequence', () => {
  expect(fibsRec(2)).toEqual([0, 1, 1]);
});

test('recursive fibonacci 3 sequence', () => {
  expect(fibsRec(3)).toEqual([0, 1, 1, 2]);
});

test('iterative fibonacci 4 sequence', () => {
  expect(fibsRec(4)).toEqual([0, 1, 1, 2, 3]);
});

test('iterative fibonacci 5 sequence', () => {
  expect(fibsRec(5)).toEqual([0, 1, 1, 2, 3, 5]);
});
