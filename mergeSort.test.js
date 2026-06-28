import { mergeSort } from "./mergeSort.js";

test('empty array', () => {
  expect(mergeSort([])).toEqual([]);
});

test('single value array', () => {
  expect(mergeSort([73])).toEqual([73]);
});

test('already sorted array', () => {
  expect(mergeSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
});

test('array with duplicated value', () => {
  expect(mergeSort([3, 2, 1, 13, 8, 5, 0, 1])).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
});

test('larger array values', () => {
  expect(mergeSort([105, 79, 100, 110])).toEqual([79, 100, 105, 110]);
});
