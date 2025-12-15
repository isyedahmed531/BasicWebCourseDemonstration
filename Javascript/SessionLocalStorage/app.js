const input = document.getElementById("input");
const button = document.getElementById("add-task-btn");
const list = document.getElementById("list-container");

function addTask() {
  const inputValue = input.value;
  const li = document.createElement("li");
  li.textContent = inputValue;
  list.appendChild(li);
}

button.addEventListener("click", () => {
  addTask();
});
