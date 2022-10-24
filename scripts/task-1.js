const categories = document.querySelector('#categories');

const item = categories.querySelectorAll('.item');
console.log(`В списку ${item.length} категорії`);

// -------------

const itemArr = Array.from(item);

function findCategory() {
  itemArr.forEach((element) => {
    const itemTitle = element.firstElementChild.textContent;
    console.log(`Категорія: ${itemTitle}`);

    const liAmount = element.querySelectorAll('li');
    console.log(`Кількість елементів: ${liAmount.length}`);
  });
}

findCategory();
