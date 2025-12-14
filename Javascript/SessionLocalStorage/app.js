document.addEventListener("DOMContentLoaded", loadTasks);

function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (taskText === "") {
    showAlert("Please write something!");
    return;
  }

  let tasks = JSON.parse(localStorage.getItem("myTasks")) || [];

  tasks.push(taskText);

  localStorage.setItem("myTasks", JSON.stringify(tasks));
  input.value = "";

  renderTasks();
}

function removeTask(index) {
  let tasks = JSON.parse(localStorage.getItem("myTasks")) || [];

  tasks.splice(index, 1);

  localStorage.setItem("myTasks", JSON.stringify(tasks));

  renderTasks();
}

function clearAllTasks() {
  if (confirm("Are you sure you want to delete all tasks?")) {
    localStorage.removeItem("myTasks");
    renderTasks();
  }
}

function renderTasks() {
  const taskList = document.getElementById("taskList");
  const tasks = JSON.parse(localStorage.getItem("myTasks")) || [];

  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.textContent = task;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";

    deleteBtn.onclick = function () {
      removeTask(index);
    };

    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  });
}

function loadTasks() {
  renderTasks();
}

function showAlert(message) {
  const alertBox = document.getElementById("customAlert");
  alertBox.textContent = message;
  alertBox.style.display = "block";

  setTimeout(() => {
    alertBox.style.display = "none";
  }, 3000);
}
