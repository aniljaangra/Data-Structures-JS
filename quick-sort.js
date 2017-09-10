/**
 * Created by Anil Jangra on 10/9/17
 */

function quickSort (arr) {
  if(arr.length < 2){
    return arr;
  }

  // find pivot
  const pivotIndex = parseInt(arr.length / 2);
  const pivotValue = arr[pivotIndex];
  const smallerValues = [] , largerValues = [];
  arr.forEach( (val , index) => {
    if(index != pivotIndex){
      ( val < pivotValue ? smallerValues : largerValues).push(val);
    }
  })
  return [ ...quickSort(smallerValues) , pivotValue , ...quickSort(largerValues) ]
}

const arrayToSort = [87,66,122,66,22,66,22,78,53,47,37,95,754,76,97,6,55,88,44,95,33,88];
console.log('Array to Sort :',JSON.stringify(arrayToSort));
console.log('Sorted Array :',JSON.stringify(quickSort(arrayToSort)));
