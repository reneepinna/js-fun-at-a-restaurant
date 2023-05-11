function createRestaurant(name){
  var restaurant = {
    name: name,
    menus: {breakfast: [], lunch: [], dinner: []}
  }

  return restaurant;
}

function addMenuItem(restaurant, item){
  //determine which menu to add the item
    if(item.type === "breakfast"){
      restaurant.menus.breakfast.push(item);
    } else if(item.type === "lunch"){
      restaurant.menus.lunch.push(item);
    }else{
      restaurant.menus.dinner.push(item);
    }
  //return the resturant
  return restaurant;
}

module.exports = {
  createRestaurant, 
  addMenuItem,
  // removeMenuItem,
  // checkForFood
}