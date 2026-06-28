function mergeSort(array) {
  // base case
  if (array.length <= 1) return array; 

  // split array into two halves (as evenly as possible)
  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);

  // recursively sort left half of array
  const sortedLeft = mergeSort(left);
  
  // recursively sort right half of array
  const sortedRight = mergeSort(right);
  
  // merge the two halves together
  return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
  let sortedArray = [];
  let leftIndex = 0;
  let rightIndex = 0;

  // loop through both arrays
  while ((leftIndex < left.length) && (rightIndex < right.length)) {
    // compare the min value from the left and right arrays
    if (left[leftIndex] < right[rightIndex]) {
      sortedArray.push(left[leftIndex]); // add the smaller value to the sorted array
      leftIndex++; // go to next array value
    } else {
      sortedArray.push(right[rightIndex]); // add the smaller value to the sorted array
      rightIndex++; // go to next array value
    }
  }

  // merge any leftover values to the sorted array
  return sortedArray.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

export { mergeSort };
