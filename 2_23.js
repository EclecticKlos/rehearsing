 /**********************************************************************************
  *                                 Homework VII                                   *
  *                                                                                *
  *  Problem: Hash Table                                                           *
  *                                                                                *
  *  Prompt: Create a HashTable class/constructor.                                 *
  *          Name it HashTable (js) or hash_table (rb/py). Use separate chaining.  *
  *                                                                                *
  *          The HashTable will have the following properties:                     *
  *                                                                                *
  *          storage: An array of arrays.                                          *
  *                                                                                *
  *          buckets: The max number of buckets that your storage can contain.     *
  *                   Initialize your "buckets" at 8 buckets.                      *
  *                                                                                *
  *          size: The current number (total) of key-value pairs in the storage.   *
  *                Initialize your "size" to 0.                                    *
  *                                                                                *
  *          The HashTable will also have the following methods:                   *
  *                                                                                *
  *          hash: Method that takes a string as an input and outputs a number.    *
  *                We have provided to you the dbjb2 hashing function, so you do   *
  *                not need to write your own.                                     *
  *                                                                                *
  *          insert: Method that takes a key and a value as inputs, and places a   *
  *                  tuple ([key,value]) into the proper bucket.                   *
  *                  If the key already exists, it should update the value.        *
  *                  You should use separate chaining to handle collisions.        *
  *                                                                                *
  *          delete: Method that takes a key as its input, and looks for the       *
  *                  [key,value] and removes it from the bucket.                   *
  *                                                                                *
  *          retrieve: Method that a key as its input, and returns the value       *
  *                    stored at that key, or undefined if the key is not present. *
  *                                                                                *
  *  Input:  N/A                                                                   *
  *  Output: A HashTable instance                                                  *
  *                                                                                *
  *  What are the time and auxiliary space complexities of the various methods?
  *
  *
  *  var djb2Code = function(str, buckets) {
//     var hash = 5381;
//     for (i = 0; i < str.length; i++) {
//       char = str.charCodeAt(i);
//       hash = ((hash << 5) + hash) + char; /* hash * 33 + c */
//     }
//     return hash % buckets;
//   };
  //*                                                                                *
  // **********************************************************************************/

var HashTable = function() {
  this.buckets = 8;
  this.hashSize = 0;
  this.storage = [[]];
}

HashTable.prototype.hash = function(string) {
  var djb2Code = function(str, buckets) {
    var hash = 5381;
    for (i = 0; i < str.length; i++) {
      char = str.charCodeAt(i);
      hash = ((hash << 5) + hash) + char; /* hash * 33 + c */
    }
    return hash % buckets;
  };

  return djb2Code(string, this.buckets);
}

HashTable.prototype.insert = function(key, value) {
  var bucketNum = this.hash(key);

  if (!this.storage[bucketNum]) {
    this.storage[bucketNum] = [];
    this.storage[bucketNum][0] = [key, value];
  }
  else {
    for (var i=0; i < this.storage[bucketNum].length; i++){
      if (this.storage[bucketNum][i][0] === key){
        this.storage[bucketNum][i][0] = key;
        this.storage[bucketNum][i][1] = value;
      }
      else if (i === this.storage[bucketNum].length-1){
        this.storage[bucketNum][i+1][0] = key;
        this.storage[bucketNum][i+1][1] = value;
      }
    }
  }
}


 /**********************************************************************
  *                           Homework X                               *
  **********************************************************************/

 /**********************************************************************
  *  Problem 1: Max Consecutive Sum                                    *
  *                                                                    *
  *  Prompt: Given an array of integers find the sum of consecutive    *
  *          values in the array that produces the maximum value.      *
  *                                                                    *
  *  Input:  Unsorted array of positive and negative integers          *
  *  Output: Integer (max consecutive sum)                             *
  *                                                                    *
  *  Time Complexity: O(n)                                             *
  *  Auxiliary Space Complexity: O(1)                                  *
  *                                                                    *
  *  Example: input = [6, -1, 3, 5, -10]                               *
  *           output = 13 (6 + -1 + 3 + 5 = 13)                        *
  *                                                                    *
  **********************************************************************/

var findMaxSegment = function(arr) {
  var fullSegmentSum = 0;
  var sumToHere = 0;
  var maxSoFar = 0;

  for (var i=0; i<arr.length; i++){
    fullSegmentSum = fullSegmentSum + arr[i];
    var tempSum = 0;
    for (var j=0; j<i; j++){
      tempSum = tempSum + arr[j];
      if (sumToHere < (fullSegmentSum - tempSum)) {
        sumToHere = fullSegmentSum - tempSum;
      }
    }
    if (maxSoFar < fullSegmentSum){
      maxSoFar = fullSegmentSum;
    }
    else if (maxSoFar < sumToHere) {
      maxSoFar = sumToHere;
    }
  }
  return maxSoFar;
}
