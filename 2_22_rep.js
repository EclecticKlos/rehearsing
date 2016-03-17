// Quicksort
  var quickSort = function(arrToSort) {
    var sortedArray = [];

    var reduceToSingleElementArray = function(arr) {
      var leftArray = [];
      var rightArray = [];
      if (arr.length === 1) {
        sortedArray.push(arr[0]);
        return;
      }
      else {
        for (i=0; i<arr.length; i++) {
          if (arr[i] < arr[0]){
            leftArray.push(arr[i]);
          }
          else if (arr[i] > arr[0]){
            rightArray.push(arr[i]);
          }
        }
        if (leftArray.length > 0) { reduceToSingleElementArray(leftArray); }
        sortedArray.push(arr[0]);
        if (rightArray.length > 0) { reduceToSingleElementArray(rightArray); }
      }
      return
    }

    reduceToSingleElementArray(arrToSort);
    return sortedArray;
  }


// MergeSort
var mergeSort = function(arrToSort) {

  var joinArrays = function(arr1, arr2) {
    var joinedArr = [];
    p1 = 0; // pointer
    p2 = 0; // pointer

    while (p1 < arr1.length && p2 < arr2.length) {
      if (arr1.length === 0){
        return arr2;
      }
      else if (arr2.length === 0) {
        return arr1;
      }

      if (arr1[p1] < arr2[p2]){
        joinedArr.push(arr1[p1]);
        p1++;
      }
      else if (arr1[p1] > arr2[p2]) {
        joinedArr.push(arr2[p2]);
        p2++;
      }
    }

    if (p1 < arr1.length) {
      debugger;
      joinedArr = joinedArr.concat(arr1.slice(p1))
    }
    else {
     joinedArr =  joinedArr.concat(arr2.slice(p2))
    }

    return joinedArr;
  }

  if (arrToSort.length <= 1){
    return arrToSort;
  }

  var midIndex = Math.floor(arrToSort.length / 2);

  return joinArrays(mergeSort(arrToSort.slice(0, midIndex)), mergeSort(arrToSort.slice(midIndex)));

}





















