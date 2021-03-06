function BST(value) {
  this.value = value;
  this.right = null;
  this.left = null;
}

BST.prototype.insert = function(value) {
  if (value <= this.value) {
    if (!this.left) this.left = new BST(value);
    else this.left.insert(value);
  }
  else if (value > this.value) {
    if (!this.right) this.right = new BST(value);
    else this.right.insert(value);
  }
};

BST.prototype.contains = function(value) {
  if (this.value === value) return true;
  if (value < this.value) {
    if (!this.left) return false;
    else return this.left.contains(value);
  }
  else if (value > this.value) {
    if (!this.right) return false;
    else return this.right.contains(value);
  }
};

BST.prototype.depthFirstTraversal = function(doSomething, order) {
  if (order === 'pre-order') doSomething(this.value);
  if (this.left) this.left.depthFirstTraversal(doSomething, order);
  if (order === 'in-order') doSomething(this.value);
  if (this.right) this.right.depthFirstTraversal(doSomething, order);
  if (order === 'post-order') doSomething(this.value);
};

BST.prototype.breadthFirstTraversal = function(iteratorFunc) {
  var queue = [this];
  while (queue.length) {
    var treeNode = queue.shift();
    iteratorFunc(treeNode);
    if (treeNode.left) queue.push(treeNode.left);
    if (treeNode.right) queue.push(treeNode.right);
  }
};

BST.prototype.getMinVal = function() {
  if (this.left) return this.left.getMinVal();
  else return this.value;
};

BST.prototype.getMaxVal = function() {
  if (this.right) return this.right.getMaxVal();
  else return this.value;
};

BST.prototype.getTreeHeight = function () {
  var leftTreeHeight = rightTreeHeight = 0;
  if(this.left) leftTreeHeight = this.left.getTreeHeight();
  if(this.right) rightTreeHeight = this.right.getTreeHeight();
  if(leftTreeHeight > rightTreeHeight) return leftTreeHeight +1;
  else return rightTreeHeight + 1;
}

BST.prototype.printLongestPath = function () {

}

var bst = new BST(30);

bst.insert(70);
bst.insert(100);
bst.insert(60);
bst.insert(59);
bst.insert(20);
bst.insert(45);
bst.insert(35);
bst.insert(85);
bst.insert(105);
bst.insert(10);
bst.insert(32);
bst.insert(5);
bst.insert(22);
bst.insert(31);

function log(node) {
 console.log(node.value);
}

// bst.breadthFirstTraversal(log);
console.log(bst.getTreeHeight())