function binary_search(array, element) {
  let start = 0;
  let end = array.length - 1;
  
  while (start <= end) {
    const middle = Math.floor((start + end) / 2);
    const guess = array[middle]  

    if (guess === element)
      return middle;
    
    if (guess < element) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }

  return null;
} 

