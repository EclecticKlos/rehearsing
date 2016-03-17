////////////////// PowerSet
var powerSet = function(str) {
  results = [];

  var getBottomOfTree = function(buildUp, depth) {
    if (depth === str.length) {
      results.push(buildUp);
      return;
    }

    getBottomOfTree(buildUp, depth+1);
    getBottomOfTree(buildUp + str[depth], depth+1);
  }

  getBottomOfTree("", 0);
  return results;
}

////////////////// Insertion Sort
var insertionSort = function(arrToSort) {
  for (var i=0; i<arrToSort.length; i++) {
    var swapMade = false;
    do {
      if (arrToSort[i+1] < arrToSort[i]){
        var temp = arrToSort[i]
        arrToSort[i] = arrToSort[i+1]
        arrToSort[i+1] = temp;
        i--;
        swapMade = true;
      }
      else {
        swapMade = false;
      }
    } while (swapMade === true)
  }
  return arrToSort;
}

////////////////// Selection Sort
var selectionSort = function(arrToSort) {
  for (var i=0; i<arrToSort.length; i++){
    var currentMinIndex = i;
    for (var j=i+1; j<arrToSort.length; j++){
      if (arrToSort[j] < arrToSort[currentMinIndex]){
        currentMinIndex = j;
      }
    }
    var temp = arrToSort[i];
    arrToSort[i] = arrToSort[currentMinIndex];
    arrToSort[currentMinIndex] = temp;
  }
  return arrToSort;
}

////////////////// Bubble Sort
var bubbleSort = function(arrToSort) {
  var swapMade = false;
  do {
    var swapMade = false;
    for (var i=0; i<arrToSort.length; i++){
      if (arrToSort[i] > arrToSort[i+1]){
        var temp = arrToSort[i];
        arrToSort[i] = arrToSort[i+1];
        arrToSort[i+1] = temp;
        swapMade = true;
      }
    }
  } while (swapMade === true)
  return arrToSort;
}

////////////////// LinkedList
var linkedList = function(){
  this.head = null;
  this.tail = null;
  this.listSize = 0;
}

var node = function(value) {
  this.value = value;
  this.next = null;
}

linkedList.prototype.append = function(value) {
  var nodeToAdd = new node(value);

   if (this.head === null){
    this.head = nodeToAdd;
    this.tail = this.head;
    this.head.next = this.tail;
    this.listSize = this.listSize+1;
  }
  else {
    this.tail.next = nodeToAdd;
    this.tail = this.tail.next;
    this.listSize = this.listSize+1;
  }
  return this;
}

linkedList.prototype.search = function(value){
  var currentNode = this.head.next;
  while (currentNode !== null) {
    if (this.head.value === value) {
      return true;
    }
    else if (currentNode.value === value){
      return true;
    }
    else {
      currentNode = currentNode.next;
    }
  }
}

////////////////// BinarySearchTree
var binaryTree = function(){
  this.root = null;
}

var node = function(value){
  this.value = value;
  this.leftChild = null;
  this.rightChild = null;
}

binaryTree.prototype.add = function(valueToAdd) {
  var nodeToAdd = new node(valueToAdd);

  if (this.root === null) {
    this.root = nodeToAdd;
    return
  }
  var traveseTree = function(currentNode){
    if (nodeToAdd.value < currentNode.value){
      if (currentNode.leftChild){
        currentNode = currentNode.leftChild;
        traveseTree(currentNode)
      }
      else {
        currentNode.leftChild = nodeToAdd;
        return;
      }
    }
    else if (nodeToAdd.value > currentNode.value){
     if (currentNode.rightChild){
        currentNode = currentNode.rightChild;
        traveseTree(currentNode)
      }
      else {
        currentNode.rightChild = nodeToAdd;
        return;
      }
    }
    else if (currentNode.value === nodeToAdd.value) {
      throw "That value already exists in the tree";
    }

  }
  traveseTree(this.root);
}

////////////////// quickSort
var quickSort = function(arrToSort) {
  var sortedArray = [];

  var reduceArrToOneElement = function(arr) {
    debugger;
    var pivotIndex = 0;
    var leftUnsorted = [];
    var rightUnsorted = [];

    if (arr.length <1 && arr[0] !== undefined){
      console.log("Arr[0]= " + arr[0])
      sortedArray.push(arr[0]);
      return;
    }
    else {
      for (var i=1; i<arr.length; i++){
        if (arr[i] < arr[pivotIndex]){
          leftUnsorted.push(arr[i]);
        }
        else if (arr[i] > arr[pivotIndex]){
          rightUnsorted.push(arr[i]);
        }
      }
    }
    if (leftUnsorted.length > 0) { reduceArrToOneElement(leftUnsorted) };
    if (arr.length > 0) sortedArray.push(arr[pivotIndex])
    if (rightUnsorted.length > 0) { reduceArrToOneElement(rightUnsorted) };
  }

  reduceArrToOneElement(arrToSort);
  return sortedArray;
}



// quickSort
var quickSort = function(arrToSort) {
  var result = [];

  var pivotAndSplit = function(arr) {
    var leftArr = [];
    var rightArr = [];

    if (arr.length <= 1) {
      result.push(arr[0]);
      return;
    }
    else {
      for (var i=1; i < arr.length; i++){
        if (arr[i] < arr[0]){
          leftArr.push(arr[i]);
        }
        else if (arr[i] > arr[0]){
          rightArr.push(arr[i]);
        }
      }
    }

    if (leftArr.length > 0) { pivotAndSplit(leftArr); }
    result.push(arr[0]);
    if (rightArr.length > 0) { pivotAndSplit(rightArr); }
  }
  pivotAndSplit(arrToSort);
  return result;
}



