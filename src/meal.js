function nameMenuItem(foodName) {
  //take in a name and create a delicious name
  return `Delicious ${foodName}`;
}

function createMenuItem(food){
  var menuItem = {
    name: food,
    price: 10.99,
    type: "breakfast"
  }
  return menuItem;
}

function addIngredients(){
  
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  // addIngredients,
  // formatPrice,
  // decreasePrice,
  // createRecipe
}


