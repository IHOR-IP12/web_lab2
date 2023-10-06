import {
  addItemToPage,
  clearInputs,
  getInputValues,
  renderItemsList,
} from "./dom_util.js";

const submitButton = document.getElementById("submit_button");
const findButton = document.getElementById("find_button");
const cancelFindButton = document.getElementById("cancel_find_button");
const findInput = document.getElementById("find_input");
const calculateButton = document.getElementById("calculate_button");
const summaryArea = document.getElementById("summary_area");
const sortZoos = document.getElementById("sort_button");

let zoos = [];
let isSearchActive = false; // Змінна для визначення активності пошуку

const addItem = ({ name, location, area, capacity }) => {
  const generatedId = uuid.v1();

  const newItem = {
    id: generatedId,
    name,
    location,
    area,
    capacity,
  };

  zoos.push(newItem);

  addItemToPage(newItem);
};

submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  const { name, location, area, capacity } = getInputValues();

  clearInputs();

  addItem({
    name,
    location,
    area,
    capacity,
  });
});

findButton.addEventListener("click", () => {
  const searchText = findInput.value.toLowerCase();
  const foundZoos = zoos.filter((zoo) =>
    zoo.name.toLowerCase().includes(searchText)
  );

  isSearchActive = true;

  renderItemsList(foundZoos);
});

cancelFindButton.addEventListener("click", () => {
  renderItemsList(zoos);
  findInput.value = "";
  isSearchActive = false;
});

calculateButton.addEventListener("click", () => {
  let zoosToCalculateArea;

  if (isSearchActive) {
    zoosToCalculateArea = zoos.filter((zoo) => zoo.name.toLowerCase().includes(findInput.value.toLowerCase()));
  } else {
    zoosToCalculateArea = [...zoos];
  }

  const totalArea = zoosToCalculateArea.reduce((total, zoo) => Number(total) + Number(zoo.area), 0);
  summaryArea.textContent = `Summary Area: ${totalArea} square kilometers`;
});


sortZoos.addEventListener("click", () => {
  let sortedZoos;

  if (isSearchActive) {
    sortedZoos = zoos.filter((zoo) => zoo.name.toLowerCase().includes(findInput.value.toLowerCase()));
  } else {
    sortedZoos = [...zoos];
  }

  sortedZoos.sort((first, second) => {
    return second.name.localeCompare(first.name);
  });

  renderItemsList(sortedZoos);
});

renderItemsList(zoos);
