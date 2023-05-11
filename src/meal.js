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

function addIngredients(food, ingredients){
  //check that food is unique
 for(var i = 0; i < ingredients.length; i++){
   if(ingredients[i] === food){
      return ingredients
    }
  }
  //add food to the array
    ingredients.push(food);
    return ingredients;
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  // formatPrice,
  // decreasePrice,
  // createRecipe
}


