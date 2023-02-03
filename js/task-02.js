const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listAll = document.querySelector('ul#ingredients');

let fragment = new DocumentFragment();

for (const ingredient of ingredients){
  const ingredientList = document.createElement('li');
        ingredientList.classList.add('item');
        ingredientList.textContent += ingredient;

  fragment.appendChild(ingredientList);
};

listAll.append(fragment);
console.log (listAll);

