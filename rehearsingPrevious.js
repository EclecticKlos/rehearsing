////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////    REHEARSING PREVIOUS   /////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // 1. Instantiate variables
    //   a. track state, results
    // 2. Return results
    // 3. Helper method (shell)
    //   a. Instantiate
    //   b. Invoke
    // 4. Base Case
    // 5. Recursive case

//////////////////////////////////////
// 2/10
// Powerset

    // 1. Instantiate variables
    //   a. track state, results
    // 2. Return results
    // 3. Helper method (shell)
    //   a. Instantiate
    //   b. Invoke
    // 4. Base Case
    // 5. Recursive case

// var powerSet = function(str){
//   result = [];

//   var traverse = function(buildUp, depth){
//     if (depth === str.length) {
//       result.push(buildUp);
//       return;
//     }
//     else if (depth < str.length){
//       traverse(buildUp, depth + 1)
//       traverse(buildUp + str[depth], depth + 1)
//     }
//   }

//   traverse("", 0)
//   console.log(result)
//   return(result)
// }


//////////////////////////////////////
// 2/11
//////////////////////////////////////
// Powerset

    // 1. Instantiate variables
    //   a. track state, results
    // 2. Return results
    // 3. Helper method (shell)
    //   a. Instantiate
    //   b. Invoke
    // 4. Base Case
    // 5. Recursive case

// var findPowerSet = function(str){
//   result = [];

//   var traverse = function(buildUp, depth){
//       if (depth === str.length) {
//         result.push(buildUp);
//         return;
//       }
//       else if (depth < str.length) {
//         traverse(buildUp, depth +1);
//         traverse(buildUp + str[depth], depth +1)
//       }
//   }

//   traverse("", 0)
//   console.log(result);
// }

/////////////////
// Insertion sort
// var insertionSort = function(arrToSort){

//   var compareAndSwap = function(index) {
//     var currentElement = arrToSort[index]

//     while(index--) {
//       if (arrToSort[index] <= currentElement || index < 0){
//         break;
//       }
//       else {
//         var temp = arrToSort[index];
//         arrToSort[index] = currentElement;
//         arrToSort[index+1] = temp;
//       }

//     }
//   }

//   for (i=1; i < arrToSort.length; i++){
//     compareAndSwap(i);
//   }
//   var sortedArr = arrToSort;
//   console.log(sortedArr);

// }


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 2/12
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Powerset

// var powerSet = function(str){
//   results = [];

//   var findSetElements = function(buildUp, depth){
//     if (depth === str.length){
//       results.push(buildUp);
//       return;
//     }

//     findSetElements(buildUp, depth + 1);
//     findSetElements(buildUp + str[depth], depth + 1);
//   }

//   findSetElements("", 0)
//   return results
// }

//////////////////////////////////////

// // Insertion Sort
// var insertSort = function(arrToSort) {

//   var compareAndSwapElements = function(index) {
//     var currentElementIndex = index;

//     while(index--){
//       if (arrToSort[currentElementIndex] > arrToSort[index] || index < 0) {
//         break;
//       }

//       temp = arrToSort[index];
//       arrToSort[index] = arrToSort[currentElementIndex];
//       arrToSort[currentElementIndex] = temp;
//       currentElementIndex = index;
//     }

//   }

//   for(i=1; i < arrToSort.length; i++){
//     compareAndSwapElements(i)
//   }
//   return arrToSort

// }


// //////////////////////////////////////

// // Selection Sort
// // Do not need to subtract 1 from iterator!

// var selectionSort = function(arrToSort){

//   for(i=0; i< arrToSort.length; i++){

//     var currentMinimumElementIndex = i;
//     for(j=i+1; j < arrToSort.length; j++){

//       if(arrToSort[j] < arrToSort[currentMinimumElementIndex]){
//         currentMinimumElementIndex = j;
//       }


//     }
//       var temp = arrToSort[i];
//       arrToSort[i] = arrToSort[currentMinimumElementIndex];
//       arrToSort[currentMinimumElementIndex] = temp;
//   }
//   console.log(arrToSort)
// }


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 2/12
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////// POWERSET

























