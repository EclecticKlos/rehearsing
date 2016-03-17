////////////////// Power Set
var powerSet = function(str) {
  var results = [];

  var traverseToBottomOfTree = function(buildUp, depth){
    if (depth === str.length) {
      results.push(buildUp)
      return;
    }
    traverseToBottomOfTree(buildUp, depth+1);
    traverseToBottomOfTree(buildUp + str[depth], depth+1);
  }

  traverseToBottomOfTree("", 0);
  return results;
}


////////////////// Selection Sort
var selectionSort = function(arrToSort) {

  for (var i=0; i<arrToSort.length; i++){
    var currentMinIndex = i;

    for (var j=i ; j<arrToSort.length; j++) {
      if (arrToSort[j] < arrToSort[currentMinIndex]){
        currentMinIndex = j;
      }
    }
    if (arrToSort[currentMinIndex] < arrToSort[i]) {
      var temp = arrToSort[i];
      arrToSort[i] = arrToSort[currentMinIndex];
      arrToSort[currentMinIndex] = temp;
    }
  }
  return arrToSort;
}


////////////////// Insertion Sort
var insertionSort = function(arrToSort) {

  var compareAndSwap = function(index){
    var currentIndex = index;

    while(index--) {
      if (index < 0) { break; }
      else if (arrToSort[currentIndex] <= arrToSort[index]) {
        var temp = arrToSort[index];
        arrToSort[index] = arrToSort[currentIndex];
        arrToSort[currentIndex] = temp;
        currentIndex = currentIndex-1;
      }
    }
  }

  for (var i=1; i< arrToSort.length; i++){
    compareAndSwap(i);
  }
  return arrToSort;
}


////////////////// Bubble Sort
var bubbleSort = function(arrToSort) {
  var swapMade = false
  do {
    swapMade = false;
    for (var i=0; i < arrToSort.length; i++) {
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


////////////////// Linked List
// append
// insert
// delete
// contains

var linkedList = function(){
  this.head = null;
  this.tail = null;
  this.listLength = 0;
}

var node = function(value){
  this.value = value;
  this.next = null;
}

linkedList.prototype.append = function(value){
  if (!this.head){
    this.head = new node(value);
    this.tail = this.head;
    this.listLength = this.listLength+1;
    return this;
  }
  else {
    this.tail.next = new node(value)
    this.tail = this.tail.next;
    this.listLength = this.listLength+1;
    return this;
  }
}

linkedList.prototype.contains = function(value){
  var valueFound = false;
  if (!this.head) {
    valueFound = false;
  }
  else if (this.head.value === value) {
    valueFound = true;
  }

  var currentNode = this.head;
  while (currentNode !== null) {
    if (currentNode.value === value){
      valueFound = true;
      break;
    }
    // else if (currentNode === tail && currentNode.value !== value) {
    //   return false;
    // }
    else {
      currentNode = currentNode.next;
    }
  }
  return valueFound;
}

linkedList.prototype.insert = function(valueToInsert, valueToInsertAfter){
  if (!this.head){
    throw "No nodes in the list";
  }
  else if (this.head.value === valueToInsertAfter) {
    var nodeInserting = new node(valueToInsert);
    nodeInserting.next = this.head.next
    this.head.next = nodeInserting;
    this.listLength = this.listLength+1;
    return this;
  }

  var currentNode = this.head;
  while (currentNode !== null) {
    if (currentNode.value === valueToInsertAfter){
      var nodeInserting = new node(valueToInsert);
      nodeInserting.next = currentNode.next
      currentNode.next = nodeInserting;
      this.listLength = this.listLength+1;
      return this;
    }
    else {
      currentNode = currentNode.next;
    }
  }
  throw "Node to insert after not found"
}

linkedList.prototype.delete = function(valueToDelete){
  if (!this.head){
    throw "No nodes in the list";
  }
  else if (this.head.value === valueToDelete) {
    this.head = this.head.next
    this.listLength = this.listLength-1;
    return this;
  }

  var currentNode = this.head;
  while (currentNode !== null) {
    if (currentNode.next.value === valueToDelete){
      var nodeDelete = currentNode.next;
      currentNode.next = nodeDelete.next
      nodeDelete.next = null;
      this.listLength = this.listLength-1;
      return this;
    }
    else {
      currentNode = currentNode.next;
    }
  }
  throw "Node to delete not found"
}


////////////////// Binary Search Tree
// Add
// Search

var binarSearchTree = function(){
  this.root = null;
  this.treeSize = 0;
}

var node = function(value){
  this.value = value;
  this.leftChild = null;
  this.rightChild = null;
}

binarSearchTree.prototype.add = function(value) {
  var thisTree = this;
  var traverseTree = function(currentNode) {
    if (currentNode.value < value) {
      if (currentNode.leftChild) {
        traverseTree(currentNode.leftChild) }
      else {
        currentNode.leftChild = new node(value);
        thisTree.treeSize = thisTree.treeSize+1;
        return thisTree;
      }
    }
    else if (currentNode.value > value) {
      if (currentNode.rightChild) {
        traverseTree(currentNode.rightChild) }
      else {
        currentNode.rightChild = new node(value);
        thisTree.treeSize = thisTree.treeSize+1;
        return thisTree;
      }
    }
    else if (currentNode.value === value){
      throw "A node with that value already exists";
    }
  }

  if (this.root) {
    return traverseTree(this.root);
  }
  else {
    this.root = new node(value);
    this.treeSize++;
    return this;
  }
}

binarSearchTree.prototype.search = function(value) {
  var thisTree = this;
  var traverseTree = function(currentNode) {
    if (currentNode.value < value) {
      if (currentNode.leftChild) {
        traverseTree(currentNode.leftChild) }
      else {
        return false;
      }
    }
    else if (currentNode.value > value) {
      if (currentNode.rightChild) {
        traverseTree(currentNode.rightChild) }
      else {
        return false;
      }
    }
    else if (currentNode.value === value){
      console.log(true);
    }
  }

  if (this.root) {
    return traverseTree(this.root);
  }
  else {
    throw "No nodes contained in the tree";
  }
}




































