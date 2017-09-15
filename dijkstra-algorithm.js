/**
 * Created by Anil Jangra on 15/9/17
 */

const processed = [];
const values = {};

function findShortestPath( graph , startNode , endNode ) {
  let node = graph[startNode];
  let currentNode = startNode;
  values[startNode] = { value : 0 , parent : null }
  while(node){
    currentNode = findCheapestNode(node , currentNode);
    node = graph[currentNode];
  }
  // console.log(values)
  //calculate path
  const array = []
  currentNode = endNode;
  while(currentNode){
    array.push(currentNode);
    currentNode = values[currentNode].parent;
  }
  console.log(array.reverse().join('--'))
}

function findCheapestNode (node , nodeKey) {
  if( processed.indexOf(nodeKey) !== -1){
    return;
  }
  processed.push(nodeKey);
  let cheapNodeValue = Infinity;
  let cheapNode = null;
  let currentNode = values[nodeKey];
  Object.keys(node).forEach( key =>{
    const currentNodeValue = currentNode.value + node[key];
    if(!values[key] || values[key].value > currentNodeValue){
      values[key] = { parent : nodeKey , value : currentNodeValue }
    }
    if( currentNodeValue < cheapNodeValue){
      cheapNode = key;
      cheapNodeValue = currentNodeValue;
    }
  })
  return cheapNode;
}

const graph = {
  A : { C : 1 , D : 2 },
  B : { F : 3 },
  C : { B : 2 , D : 1 , E: 3 },
  D : { G : 1 , C : 1 },
  E : { F : 2 },
  G : { F : 1 },
  F : {}
}

findShortestPath(graph , 'A' , 'C');