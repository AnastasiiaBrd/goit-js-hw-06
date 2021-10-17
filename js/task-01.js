const calcItems = document.querySelector("#categories").children.length;
console.log(`Number of categories: ${calcItems}`);

const itemsEl = document.querySelectorAll(".item");
itemsEl.forEach((item) => {
  const titleEl = item.querySelector("h2").textContent;
  const numberEl = item.querySelector("ul").children.length;
  console.log(`Category: ${titleEl} \n Elements: ${numberEl}`);
});
