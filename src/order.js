
function takeOrder(order, deliveryOrders){
  if(deliveryOrders.length >= 3){
    return;
  }
  return deliveryOrders.push(order);
}

function refundOrder(number, deliveryOrders){
  for(var i = 0; i < deliveryOrders.length; i++){
    if(number === deliveryOrders[i].orderNumber){
      deliveryOrders.splice(i, 1);
      return deliveryOrders;
    }
  }
  return deliveryOrders;
}

function listItems(deliveryOrders){
  var list = deliveryOrders[0].item;
  for(var i = 1; i < deliveryOrders.length; i++){
    list = `${list}, ${deliveryOrders[i].item}`;
  }
  return list;
}

function searchOrder(deliveryOrders, item){
  for(var i = 0; i < deliveryOrders.length; i++){
    if(deliveryOrders[i].item === item){
      return true;
    }
  }
  return false;
}


module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}