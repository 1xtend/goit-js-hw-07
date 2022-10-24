const ingredients = ['Картопля', 'Гриби', 'Часник', 'Помідори', 'Зелень', 'Приправи'];

const ingredientsList = document.querySelector('#ingredients');

function createElement(text) {
  const listElem = document.createElement('li');
  listElem.textContent = text;

  return listElem;
}

function addElements(arr) {
  const foodArr = [];

  arr.forEach((elem) => {
    const foodElem = createElement(elem);
    foodArr.push(foodElem);
  });

  ingredientsList.append(...foodArr);
}

addElements(ingredients);
