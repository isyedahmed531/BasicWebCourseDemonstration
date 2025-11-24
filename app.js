const title = document.getElementById("title");
const input = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");

console.log(input);

title.textContent = "DOM Manipulation Demo (JavaScript)";

addBtn.addEventListener("click", function () {
  const taskText = input.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const li = document.createElement("li");
  li.textContent = taskText;

  todoList.appendChild(li);

  input.value = "";
});

todoList.addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("completed");
  }
});

todoList.addEventListener("dblclick", function (event) {
  if (event.target.tagName === "LI") {
    event.target.remove();
  }
});

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}
const alice = new Person("Alice", 30);
alice.greet();

const bob = new Person("Bob", 25);
bob.greet();
