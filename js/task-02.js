const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const listEl = document.querySelector("#ingredients");
const elements = ingredients.map((ingredient) => {
  const ingrEl = document.createElement("li");
  ingrEl.textContent = ingredient;
  ingrEl.className = "item";
  return ingrEl;
});
listEl.append(...elements);
