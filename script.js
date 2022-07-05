const textareaEl = document.getElementById("names");
const submitBtn = document.getElementById("submit-btn");
const allNamesEl = document.getElementById("all-names");

let names = [];
let groups = [];

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

submitBtn.addEventListener("click", (e) => {
  removeAllChildNodes(allNamesEl)
  e.preventDefault();

  let name = textareaEl.value.split("\n");

  names.push(name);
  shuffle(name);

  for (var i = 0; i < name.length; i += 2) {
    groups.push(name.slice(i, i + 2));
  }

  groups.map((pairedNames) => {
    let singleNameEl = document.createElement("p");
    singleNameEl.innerHTML = `${pairedNames.join(" and ")}`;
    console.log(pairedNames.join(" and "))
    allNamesEl.appendChild(singleNameEl);
    console.log(allNamesEl);
  });

  groups = [];
});