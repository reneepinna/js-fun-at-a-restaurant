function createRestaurant(name){
  var restaurant = {
    name: name,
    menus: {breakfast: [], lunch: [], dinner: []}
  }

  return restaurant;
}

function addMenuItem(restaurant, item){
  
  for(var i = 0; i < restaurant.menus[item.type].length; i++){
    if(restaurant.menus[item.type][i] === item){
      return restaurant;
    }
  }
  restaurant.menus[item.type].push(item);
  return restaurant;
}


function removeMenuItem(resturant, itemName, type){
  //If the array is empty return right away
  if(resturant.menus[type].length === 0){
    return `Sorry, we don't sell ${itemName}, try adding a new recipe!`;
  }

  //If the array has items, look for the requested item
  for(var i = 0; i < resturant.menus[type].length; i++){
    if(resturant.menus[type][i].name === itemName){
      resturant.menus[type].splice( i, 1);
      return `No one is eating our ${itemName} - it has been removed from the ${type} menu!`;
    }else {
      return `Sorry, we don't sell ${itemName}, try adding a new recipe!`;
    }
  } 
}

function checkForFood(restaurant, item){
  for(var i = 0; i < restaurant.menus[item.type].length; i++){
    if(restaurant.menus[item.type][i] === item){
      return `Yes, we're serving ${item.name} today!`;
    }
  }
  return `Sorry, we aren't serving ${item.name} today.`;
}

module.exports = {
  createRestaurant, 
  addMenuItem,
  removeMenuItem,
  checkForFood
}