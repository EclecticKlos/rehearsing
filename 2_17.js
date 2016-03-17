////////////////// Insertion Sort
var insertionSort = function(arrToSort){
  var compareAndSwapElements = function(index){

    var currentIndex = index;
    while(index--){
      if (arrToSort[currentIndex] < arrToSort[index]){
        var temp = arrToSort[currentIndex];
        arrToSort[currentIndex] = arrToSort[index];
        arrToSort[index] = temp;
        currentIndex--;
      }
    }
  }

  for (i=1; i<arrToSort.length; i++){
    compareAndSwapElements(i)
  }
  return arrToSort;
}

////////////////// Selection Sort
var selectionSort = function(arrToSort) {
  for (var i=0; i<arrToSort.length; i++){
    var currentMinimumIndex = i;
    for (var j=i+1; j<arrToSort.length; j++){
      if (arrToSort[j] < arrToSort[currentMinimumIndex]){
        currentMinimumIndex = j;
      }
    }
    if (arrToSort[currentMinimumIndex] < arrToSort[i]){
      var temp = arrToSort[i];
      arrToSort[i] = arrToSort[currentMinimumIndex];
      arrToSort[currentMinimumIndex] = temp;
    }
  }
  return arrToSort;
}


////////////////// Bubble Sort
var bubbleSort = function(arrToSort){
  var i = 0;

  do {
    var swapMade = false;
    for (var i=0; i<arrToSort.length; i++) {
      if (arrToSort[i+1] < arrToSort[i]) {
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
var linkedList = function(){
  this.head = null;
  this.tail = null;
  this.listSize = 0;
}

var node = function(value){
  this.value = value;
  this.next = null;
}

linkedList.prototype.append = function(value){
  if (!this.head){
    this.head = new node(value);
    this.tail = this.head;
    this.listSize = this.listSize + 1;
  }
  else {
    this.tail.next = new node(value);
    this.tail = this.tail.next;
    this.listSize = this.listSize + 1;
  }
  return this;
}

linkedList.prototype.search = function(value){
  var currentNode = this.head;

  if (currentNode.value === value) { return true; }
  else {
    while (currentNode.next){
      if (currentNode.next.value === value) {
        return true;
      }
      return false;
    }
  }
}

linkedList.prototype.insert = function(valueOfNewNode, valueToInsertAfter){
  var currentNode = this.head;

  if (currentNode.value === valueToInsertAfter) {
    var newNode = new node(valueOfNewNode);
    newNode.next = this.head.next
    this.head.next = newNode;
    return this;
  }
  else {
    while (currentNode.next){
      if (currentNode.next.value === valueToInsertAfter) {
        currentNode = currentNode.next
        var newNode = new node(valueOfNewNode);
        newNode.next = currentNode.next;
        currentNode.next = newNode;
        this.listSize = this.listSize + 1;
        return this;
      }
      currentNode = currentNode.next;
    }
    return false;
  }
}

linkedList.prototype.delete = function(valueOfNodeToDelete){
  var currentNode = this.head;

  if (currentNode.value === valueToInsertAfter) {
    this.head = currentNode.next;
    this.listSize = this.listSize -1;
    return this;
  }
  else {
    while (currentNode.next){
      if (currentNode.next.value === valueToInsertAfter) {
        var deletingNode = currentNode.next;
        currentNode.next = deletingNode.next;
        this.listSize = this.listSize -1;
        return this;
      }
      currentNode = currentNode.next;
    }
    return false;
  }
}


////////////////// Binary Search
var binarySearchTree = function(){
  this.root = null;
}

var node = function(value) {
  this.value = value;
  this.leftChild = null;
  this.rightChild = null;
}

binarySearchTree.prototype.add = function(value){
  var thisTree = this;
  var traverseTree = function(currentNode) {
    if (value < currentNode.value){
      if (currentNode.leftChild){
        traverseTree(currentNode.leftChild)
      }
      else {
        currentNode.leftChild = new node(value);
        return thisTree;
      }
    }
    else if (value > currentNode.value){
      if (currentNode.rightChild){
        traverseTree(currentNode.rightChild)
      }
      else {
        currentNode.rightChild = new node(value);
        return thisTree;
      }
    }
  }

  if (!this.root) {
    this.root = new node(value);
    return thisTree;
  }
  else {
    traverseTree(thisTree.root);
  }
}

binarySearchTree.prototype.search = function(value){
  if (!this.root) {
    throw "This tree has no nodes";
  }
  else {
    var currentNode = this.root;
    var traverseTree = function(currentNode) {
      if (currentNode.value < value){
        if (currentNode.leftChild){
          traverseTree(currentNode.leftChild);
        }
      }
      else if (currentNode.value > value){
        if (currentNode.rightChild){
          traverseTree(currentNode.rightChild);
        }
      }
      else if (currentNode.value === value){
        return true;
      }
      else {
        return false;
      }
    }
  }
}







































