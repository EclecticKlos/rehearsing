var quickSort = function(arrToSort) {
  var sortedArray = [];

  var pivotAndSplit = function (arr){
    var leftArray = [];
    var rightArray = [];
    debugger;
    if (arr.length < 1 && arr[0] !== undefined) {
      sortedArray.push(arr[0]);
      return;
    }
    else {
      for(i=1; i<arr.length; i++){
        if (arr[i] < arr[0]) {
          leftArray.push(arr[i]);
        }
        else if (arr[i] > arr[0]){
          rightArray.push(arr[i]);
        }
      }
    }
    if (leftArray.length >=1) { pivotAndSplit(leftArray) }
    if (arr.length >=1) { sortedArray.push(arr[0]); }
    if (rightArray.length >=1) { pivotAndSplit(rightArray) }
  }
  pivotAndSplit(arrToSort);
  return sortedArray;
}

// quickSort([2,7,1,3])


var mergeSort = function(arrToSort) {

  var joinArrays = function(arr1, arr2){
    var result = [];
    p1 = 0; // pointer1
    p2 = 0; // pointer2

    if (arr1 === undefined) { return arr2; }
    else if (arr2 === undefined) { return arr1; }

    while (arr1[p1] !== undefined && arr2[p2] !== undefined){
      if (arr1[p1] < arr2[p2]){
        result.push(arr1[p1]);
        p1++;
      }
      else {
        result.push(arr2[p2]);
        p2++;
      }
    }

    if (p1 === arr1.length) {
      result = result.concat(arr2.slice([p2]));
    }
    else if (p2 === arr2.length) {
      result = result.concat(arr1.slice([p1]));
    }

    return result;
  }


  if (arrToSort.length <= 1){
    return arrToSort;
  }

  var midIndex = Math.floor(arrToSort.length/2);
  var sortedArray = joinArrays(mergeSort(arrToSort.slice(0, midIndex)), mergeSort(arrToSort.slice(midIndex)))
  return sortedArray;

}

mergeSort([5,7,8,24,3,9,12,6,22,4]);



























