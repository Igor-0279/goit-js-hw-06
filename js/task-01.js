const categoriesElement = document.querySelector("#categories");
console.log('Number of categories: ',categoriesElement.children.length);
for(const item of categoriesElement.children) {
    console.log(`Category: ${item.firstElementChild.textContent}
Elements: ${item.lastElementChild.children.length}`);
}