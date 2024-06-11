const findSmallestIndex = (arr) => {
  let smallestElement = arr[0];
  let smallestIndex = 0;

  for (let i = 0; i < arr.length; i++) {
    if (smallestElement > arr[i]) {
      smallestElement = arr[i];
      smallestIndex = i;
    } 
  }

  return smallestIndex;
}


const selectionSort = (arr) => {
  const newArray = [];

  while (arr.length > 0) {
    const smallest = findSmallestIndex(arr);
    newArray.push(arr.splice(smallest, 1)[0]);
  } 

  return newArray;
}

console.log(selectionSort([14, 27, 133, 42, 51, 60, 37, 28, 44]));