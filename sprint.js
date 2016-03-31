// Target Practice - RECURSION

// 1. What are the three recursive architectual patterns covered in class?
  a. Helper method
  b. Recursion with side-effects
  c. Pure recursion



// 1.a List the step by step for Helper Method Recursion?
  1. Declare recursive function and helper function
  2. Declare state variables and return them
  3. Write base case
  4. Write recursive case



// 1.b Should the recursive case or base case typically be tackled first?
  // The base case because it is what will break out of the recursive call



// 2a. Print each item in an array in order using Helper Method of Recursion
// Input: Array
// Output: Undefined
function print(arr){

  var printEach = function(index) {
    if (index === arr.length) {
      return;
    }
    else {
      console.log(arr[index])
      printEach(index+1);
    }
  }

  printEach(0)
}
// Example: print([1,2,3]) =>
// 1
// 2
// 3




// 2b. Print each item in an array backwards using Helper Method of Recursion
// Input: Array
// Output: Undefined
function reversePrint(arr){
  var printEach = function(index) {
    if (index < 0) {
      return;
    }
    else {
      console.log(arr[index])
      printEach(index-1);
    }
  }

  printEach(arr.length)
}
// Example: reversePrint([1,2,3]) =>
// 3
// 2
// 1




// 2c. Reverse a string using Helper Method of Recursion
// Input: String with no spaces
// Output: String
function reverseString(str){
  var buildUp = [];

  var buildReverseString = function(index) {
    if (buildUp.length === str.length) {
      return;
    }
    else {
      buildUp.push(str[index]);
      buildReverseString(index-1);
    }
  }

  buildReverseString(str.length-1)
  return buildUp.join('');
}
// Example: reverseString('hello') => 'olleh'




// 2d. Create tuples from an array using the Helper Method of Recursion
// Input: Array of integers
// Output: Array of tuples
function tuples(arr){
  var tups = [];

  function makeTups(index){
    if (index > arr.length+1) {
      return
    }
    else {
      var temp = [];
      temp.push(arr[index-1], arr[index]);
      tups.push(temp);
      makeTups(index+2);
    }
  }
  makeTups(1);
  return tups;
}
// Example: tuples([1, 2, 3, 4, 5, 6]) => [[1,2], [3,4], [5,6]]
// Example: tuples([1, 2, 3, 4, 5]) => [[1,2], [3,4], [5, undefined]]




// 2e. Flatten a nested array using the Helper Method of Recursion
// Input: Array of integers and arrays
// Output: Array of integers
function flatten(arr){
  var flattened = [];

  function assessElement(indexes){
    if (index === arr.length){
      return
    }
    else {

    }

  }
}
// Example: flatten([1, [2, 3, [4]], 5, [[6]]]) => [1, 2, 3, 4, 5]




// 2f. Power using Helper Method of Recursion
// Input: Two Integers, Base and Exponent
// Output: Integer of result
function power(base, exponent){
  var runningProduct = base;

  function productTimesBase(timesMultiplied){
    if (timesMultiplied === exponent){
      return;
    }
    else {
      runningProduct = runningProduct * base;
      productTimesBase(timesMultiplied + 1)
    }
  }
  productTimesBase(1);
  return runningProduct;
}
// Example: power(3, 4) => 81




// 2g. Merge two sorted array using the Helper Method of Recursion
// Input: 2 Sorted Arrays
// Output: Sorted Array
function merge(array1, array2){
  var sorted = [];

  function compareArrElements(p1, p2){
    if (p1 === array1.length){
      console.log(p2);
      sorted = sorted.concat(array2.slice(p2));
      return;
    }
    else if (p2 === array2.length){
      sorted = sorted.concat(array1.slice(p1));
      return;
    }
    else {
      if (array1[p1] < array2[p2]){
        sorted.push(array1[p1]);
        p1++;
        compareArrElements(p1, p2);
      }
      else {
        sorted.push(array2[p2]);
        p2++;
        compareArrElements(p1, p2);
      }
    }
  }
  compareArrElements(0,0);
  return sorted;
}
// Example: merge([1, 4, 7],[2, 3, 6, 9]) => [1, 2, 3, 4, 6, 7, 9]




// 3. What are side effects?




// 3a.-3g. Redo problems 2a.-2g. with Recursion using Side Effects




// 4. How is Pure Recursion different from Recursion w/ Side Effects?




// 4a.-4g. Redo problems 2a.-2g. with Using Pure Recursion











// Target Practice - RECURSION

// 1. What are the three recursive architectual patterns covered in class?




// 1.a List the step by step for Helper Method Recursion?




// 1.b Should the recursive case or base case typically be tackled first?




// 2a. Print each item in an array in order using Helper Method of Recursion
// Input: Array
// Output: Undefined
function print(arr){

}
// Example: print([1,2,3]) =>
// 1
// 2
// 3




// 2b. Print each item in an array backwards using Helper Method of Recursion
// Input: Array
// Output: Undefined
function reversePrint(arr, newArr){
  if (newArr.length === arr.length){
    return;
  }
  else {
    newArr.push(arr[newArr.length]);
    reversePrint(arr, newArr);
  }
  return newArr;
}

function reverse(s) {
  return (s === '') ? '' : reverse(s.substr(1)) + s.charAt(0);
}
// Example: reversePrint([1,2,3]) =>
// 3
// 2
// 1




// 2c. Reverse a string using Helper Method of Recursion
// Input: String with no spaces
// Output: String
function reverseString(str){

}
// Example: reverseString('hello') => 'olleh'




// 2d. Create tuples from an array using the Helper Method of Recursion
// Input: Array of integers
// Output: Array of tuples
function tuples(arr){

}
// Example: tuples([1, 2, 3, 4, 5, 6]) => [[1,2], [3,4], [5,6]]
// Example: tuples([1, 2, 3, 4, 5]) => [[1,2], [3,4], [5, undefined]]




// 2e. Flatten a nested array using the Helper Method of Recursion
// Input: Array of integers and arrays
// Output: Array of integers
function flatten(arr){

}
// Example: flatten([1, [2, 3, [4]], 5, [[6]]]) => [1, 2, 3, 4, 5]




// 2f. Power using Helper Method of Recursion
// Input: Two Integers, Base and Exponent
// Output: Integer of result
function power(base, exponent){

}
// Example: power(3, 4) => 81




// 2g. Merge two sorted array using the Helper Method of Recursion
// Input: 2 Sorted Arrays
// Output: Sorted Array
function merge(array1, array2){

}
// Example: merge([1, 4, 7],[2, 3, 6, 9]) => [1, 2, 3, 4, 6, 7, 9]

