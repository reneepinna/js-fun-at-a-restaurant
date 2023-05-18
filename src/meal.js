function nameMenuItem(foodName) {
  return `Delicious ${foodName}`;
}

function createMenuItem(food, price, type) {
  var menuItem = {
    name: food,
    price: price,
    type: type
  }

  return menuItem;
}

function addIngredients(food, ingredients) {
 for (var i = 0; i < ingredients.length; i++) {
   if (ingredients[i] === food) {
      return ingredients
    }
  }
  
    ingredients.push(food);
    return ingredients;
}

function formatPrice(price) {
  return `$${price}`;
}

function decreasePrice(price) {
  return (price - (price / 10));
}

function createRecipe(title, ingredients, menuItemType) {
  var recipe = {
    title: title,
    ingredients: ingredients,
    type: menuItemType,
  }

  return recipe;
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}


