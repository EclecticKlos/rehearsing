////////////////// POWERSET

// var findPowerSet = function(str){
//   results = [];

//   var traverseToEndOfTree = function(buildUp, depth){
//     if (depth === str.length){
//       results.push(buildUp);
//       return;
//     }
//     traverseToEndOfTree(buildUp, depth+1);
//     traverseToEndOfTree(buildUp + str[depth], depth+1);
//   }

//   traverseToEndOfTree("", 0)
//   return results;
// }



////////////////// INSERTION SORT
// var insertionSort = function(arrToSort){

//   var compareAndSwap = function(index){
//     var comparingElementIndex = index;

//     while(index--){
//       if(arrToSort[index] > arrToSort[comparingElementIndex]){
//         var temp = arrToSort[comparingElementIndex]
//         arrToSort[comparingElementIndex] = arrToSort[index];
//         arrToSort[index] = temp;
//         comparingElementIndex = comparingElementIndex -1;
//       }
//     }
//   }

//   for(i=1; i<arrToSort.length; i++){
//     compareAndSwap(i);
//   }
//   return arrToSort;
// }



////////////////// SELECTION SORT
// var selectionSort = function(arrToSort){

//   for(i=0; i<arrToSort.length; i++){
//     var currentMinimumElementIndex = i;
//     for(j=i; j<arrToSort.length; j++){
//       if (arrToSort[j] < arrToSort[currentMinimumElementIndex]){
//         currentMinimumElementIndex = j
//       }
//     }
//     if (arrToSort[currentMinimumElementIndex] < arrToSort[i]){
//       var temp = arrToSort[i];
//       arrToSort[i] = arrToSort[currentMinimumElementIndex];
//       arrToSort[currentMinimumElementIndex] = temp;
//     }
//   }
//   return arrToSort;
// }

////////////////// BUBBLE SORT
// var bubbleSort = function(arrToSort){
//   var elementsSwapped;
//   var i = 0;
//   do {
//     elementsSwapped = false;
//     for (i=0; i<arrToSort.length-1; i++){
//       if (arrToSort[i] > arrToSort[i+1]){
//         var temp = arrToSort[i+1];
//         arrToSort[i+1] = arrToSort[i];
//         arrToSort[i] = temp;
//         elementsSwapped = true;
//       }
//     }
//   } while (elementsSwapped === true)

//   return arrToSort;
// }


////////////////// LINKED LIST
var node = function(value) {
  this.value = value
  this.next = null;
}

var linkedList = function(){
  this.head = null;
  this.tail = null;
  this.head.next = this.tail;
  this.numberOfNodes = 0;
}

linkedList.prototype.append = function(valueOfNodeToAppend){
  if (this.head === null){
    this.head = new node(valueOfNodeToAppend);
    this.tail = this.head;
    this.numberOfNodes = this.numberOfNodes + 1;
    return this;
  }
  else {
    this.tail.next = new node(valueOfNodeToAppend);
    this.tail = this.tail.next;
    this.numberOfNodes = this.numberOfNodes + 1;
    return this;
  }
}

linkedList.prototype.search = function(searchedNodeValue){
  var currentNode = this.head;
  while (currentNode.next !== null){
    if (currentNode.value === searchedNodeValue){
      return true;
    }
    currentNode = currentNode.next;
  }
  return false;
}

linkedList.prototype.insert = function(valueOfNodeToInsert, nodeValueToInsertAfter){

  var currentNode = this.head;
  var insertAfterNode = null;
  var insertBeforeNode = null;

  var findeBeforeAfterNodes = function(searchedNodeValue){
    while (currentNode.next !== null){
      if (currentNode.next.value === searchedNodeValue){
        debugger;
        insertAfterNode = currentNode.next;
        insertBeforeNode = insertAfterNode.next;
        break;
      }
      currentNode = currentNode.next;
    }
    if (insertAfterNode === null) {throw "Node to insert after does not exist in this list";}
  }

  if (this.head === null){
    this.head = new node(valueOfNodeToInsert);
    this.tail = this.head;
    this.numberOfNodes = this.numberOfNodes + 1;
    return this;
  }
  else if (this.head.value === nodeValueToInsertAfter){
    var headNext = this.head.next;
    this.head.next = new node(valueOfNodeToInsert);
    var insertedNode = this.head.next;
    insertedNode.next = headNext;
    return this;
  }
  else {
    findeBeforeAfterNodes(nodeValueToInsertAfter);
    insertAfterNode.next = new node(valueOfNodeToInsert);
    var currentNode = insertAfterNode.next;
    currentNode.next = insertBeforeNode;
    this.numberOfNodes = this.numberOfNodes + 1;
    return this;
  }

}







