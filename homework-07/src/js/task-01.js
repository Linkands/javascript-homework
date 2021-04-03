const categories = document.querySelectorAll("#categories .item");
console.log(`В списке ${categories.length} категории.`);

const consoleCategories = [...categories]
    .map(categorie => console.log(`Категория: ${categorie.children[0].textContent}
Количество элементов: ${categorie.children[1].children.length}`))