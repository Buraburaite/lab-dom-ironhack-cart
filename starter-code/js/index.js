function Item(itemName, unitPrice) {
  this.name   = itemName;
  this.price  = unitPrice;
}

function deleteItem(e){

}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice(e) {

}

function createQuantityInput(){

}

function createDeleteButton(){

}

function createQuantityNode(){

}

function createItemNode(dataType, itemData){

}

function createNewItemRow(itemName, itemUnitPrice){

}

function createNewItem(){

}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  // var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  // createItemButton.onclick = createNewItem;

  for (let i = 0; i < deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }

  var cols = [];
  var rows = document.getElementsByClassName('row');

  for (let i = 0; i < rows.length; i++) {
    let temp = rows.item(i);
    let temp2 = temp.getElementsByClassName('col');

    for (var j = 0; j < temp2.length; j++) {
      console.log(temp2.item(j).innerHTML);
      console.log(temp2.item(j).innerHTML.length);
    }
  }
  // rowNodeList.forEach(function(node, nodeIndex) {
  //   rows.push(rowNodeList.item(nodeIndex));
  // });

  // var cart = rows.(function(row) {
  //
  //   let cols = row.getElementsByClassName('col');
  //   console.log(cols);
  //   return new Item("hi", 3);
  //
  // });

};
