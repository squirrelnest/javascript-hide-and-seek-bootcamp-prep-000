function getFirstSelector(selector) {

  return document.querySelector(selector);
}

function nestedTarget() {

  return document.getElementById('nested').getElementsByClassName('target')[0];
}

function increaseRankBy(n) {

  var x = parseInt(n, 10);
  var rankers = document.querySelectorAll('.ranked-list li');

  for (let i=0; i<rankers.length; i++) {
    rankers[i].innerHTML = parseInt(rankers[i].innerHTML) + x;
  }
  return rankers;
}

/* BRUTE FORCE METHOD OF DEEPESTCHILD()

function deepestChild() {

  var nodeList = document.querySelectorAll('div#grand-node');
  var newList = [];
  var newnewList = [];
  var newnewnewList = [];
  var newnewnewnewList = [];
  var newnewnewnewnewList = [];
  var newnewnewnewnewnewList = [];

  for (var i=0; i<nodeList.length; i++) {
    if ( nodeList[i].children.length > 0 ) {
      for (const child of nodeList[i].children) {
        newList.push(child);
      }
    }
  }
  for (const item of newList) {
    if ( item.children.length > 0 ) {
      for (const child of item.children) {
        newnewList.push(child);
      }
    }
  }
  for (const item of newnewList) {
    if ( item.children.length > 0 ) {
      for (const child of item.children) {
        newnewnewList.push(child);
      }
    }
  }
  for (const item of newnewnewList) {
    if ( item.children.length > 0 ) {
      for (const child of item.children) {
        newnewnewnewList.push(child);
      }
    }
  }

return newnewnewnewList[0];
}

*/

/*
function deepestChild() {

  var nodeList = document.querySelectorAll('div#grand-node');
//  var newList = [];

  while ( nodeList.length > 0 ) {
    for (var i = 0; i < nodeList.length; i++) {
      if ( nodeList[i].children.length > 0 ) {
        Object.assign({}, nodeList, { [nodeList[i++]] : [nodelist[i].children] });
        delete nodeList[i];
      }
    }
  }
return nodeList;
}


  while ( nodeList.length > 0 ) {
    for (var i = 0; i < nodeList.length; i++) {
      if ( nodeList[i] != undefined && nodeList[i].children.length > 0 ) {
        nodeList[i+1] = nodeList[i].children;
      }
      delete nodeList[i];
    }
  }
return nodeList;

*/

function deepestChild() {

  var nodeList = document.querySelectorAll('div#grand-node');
  var newList = [];

  while ( nodeList.isArray === true ) {
    for (var i=0; i<1; i++) {
      newList.push(nodeList[i].children);
      nodeList = newList.shift();
    }
  }

return nodeList[0];
}
/*
      for (const child of nodeList.children) {
        nodeList.push(child);
        var item = nodeList.pop();
      }
    }
}


function deepestChild() {

  var nodeList = document.querySelectorAll('div#grand-node');
  var newList = [];

while ( nodeList[0].children.length > 0 )
  if ( nodeList.isArray === true ) {

    for (var i = 0; i < nodeList[0].children.length; i++) {
        newList.push(nodeList[i].children);
    }

  nodeList = newList.shift();
  }

return nodeList;
}

*/
