const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsList = document.getElementById("ingredients")

const foodIngredients = ingredients.map(ingredient => {
  let items = document.createElement("li");
  items.textContent = ingredient;
  return items
})

ingredientsList.append(...foodIngredients)