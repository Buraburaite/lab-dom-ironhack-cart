//Main method
window.onload = function() {

  //Retrive all items in the cart, creating an array of Item objects
  var items = gatherItemInfo(document);

  //Add listener functions for handling user input
  attachListeners(document, items);

};

//Item class
function Item(itemName, unitPrice, quantityInputEl) {


  this.name = itemName;

  //unitPrice       = unitPrice.replace(/$\s/g,''); //doesn't work for some reason
  unitPrice       = unitPrice.replace(' ','').replace('$','');
  this.unitPrice  = parseFloat(unitPrice);

  this.quantity = function getQuantity() {
    return parseInt(quantityInputEl.value);
  };

  this.totalPrice = function getTotalPrice() {
    return this.quantity() * this.unitPrice;
  };

}

//Creates and returns items from the doc as an array
function gatherItemInfo(){

  //El = of type Element, NL = of type NodeList
  let items = [];
  let rowsNL = document.getElementsByClassName('row');

  for (let i = 0; i < rowsNL.length; i++) {

    let rowEl = rowsNL.item(i);
    let colsNL = rowEl.getElementsByClassName('col');

    items.push(new Item(
      colsNL.item(0).innerHTML,
      colsNL.item(1).innerHTML,
      colsNL.item(2).getElementsByClassName('quantity-input').item(0)
    ));
  }

  return items;
}

//Sets up the logic of the document
function attachListeners(doc, items) {

  // let createItemButton = doc.getElementById('new-item-create');
  let totalPriceLbl = doc.getElementById('total');


  // createItemButton.onclick = createNewItem;

  let deleteButtons = doc.getElementsByClassName('btn-delete');
  for (let i = 0; i < deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }

  let quantityInputs = doc.getElementsByClassName('quantity-input');
  for (let j = 0; j < quantityInputs.length ; j++){
    quantityInputs[j].input = console.log('Hello World!');
  }

  function deleteItem(e){

  }

  function getItemTotalPrice(item){

  }

  function updateItemTotal(e){
    console.log('Hello World!');

    updateTotalPrice();

  }

  function updateTotalPrice() {

    //Sum the totalPrices of all items
    let totalPrice = items.reduce(function calcTotalPrice(target, item) {
      return target + item.totalPrice();
    }, 0);

    //Format as $totalPrice, adding .00
    totalPrice = '$' + totalPrice.toString();
    if (!totalPrice.includes('.')) {
      totalPrice += '.00';
    }
    else {
      totalPrice.slice(0, totalPrice.indexOf('.') + 2);
    }

    totalPriceLbl.innerHTML = totalPrice;
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
}
