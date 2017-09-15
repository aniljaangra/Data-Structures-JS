/**
 * Created by Anil Jangra on 10/9/17
 */
/*
function quickSort (arr , left , right) {

  const pivotIndex = partition(arr, left, right);

  quickSort( arr , left , pivotIndex-1);
  quickSort( arr , pivotIndex , right);

}*/

function  quickSort(arr, left, right)
{
  var i = left;
  var j = right;
  var tmp;
  pivotidx = (left + right) / 2;
  var pivot = parseInt(arr[pivotidx.toFixed()]);
  /* partition */
  while (i <= j)
  {
    while (parseInt(arr[i]) < pivot)
      i++;
    while (parseInt(arr[j]) > pivot)
      j--;

    console.log(`arr[${i}] = ${arr[i]},arr[${j}] = ${arr[j]}`);
    if (i <= j)
    {
      tmp = arr[i];
      arr[i] = arr[j];
      arr[j] = tmp;
      i++;
      j--;
      console.log('After Swap:' , arr);
    }else{
      console.log('Skipping Swap');
    }
  }
  console.log('Final for this partition',arr);
  /* recursion */
  if (left < j)
    quickSort(arr, left, j);
  if (i < right)
    quickSort(arr, i, right);
  return arr;
}

/*function  partition( arr , left , right) {
  const pivotIndex = parseInt( (left + right)/2);
  const pivotValue = arr[pivotIndex];
  let start = left , end = right;

  while(start < end){

    while (arr[start]<pivotValue && start < pivotIndex) start++;
    while (arr[end]>pivotValue && end < pivotIndex) start++;

  }
}*/

// const arrayToSort = [87,66,122,66,22,66,22,78,53,47,37,95,754,76,97,6,55,88,44,95,33,88];
const arrayToSort = [1,2,3,4,5,6,7,2];
console.log('Array to Sort :',JSON.stringify(arrayToSort));
console.log('Sorted Array :',JSON.stringify(quickSort(arrayToSort , 0,7)));
