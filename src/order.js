
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

module.exports = {
  takeOrder,
  refundOrder,
  // listItems,
  // searchOrder
}