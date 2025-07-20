let inputTask = document.querySelector("input");
let addTask = document.querySelector("button");
let todoContent = document.querySelector(".todo_content");

// 1️⃣ Load existing tasks from localStorage on page load
window.addEventListener("DOMContentLoaded", () => {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach(task => createTaskElement(task));
});

// 2️⃣ Add new task
addTask.addEventListener("click", () => {
  let inputContent = inputTask.value.trim();

  if (inputContent !== "") {
    createTaskElement(inputContent);
    saveTaskToLocal(inputContent);
    inputTask.value = "";
  } else {
    alert("Please enter a task");
  }
});

// 3️⃣ Function to create task element
function createTaskElement(taskText) {
  let newItem = document.createElement("p");
  newItem.classList.add("todo_item");
  newItem.innerText = taskText;

  let deleteIcon = document.createElement("i");
  deleteIcon.classList.add("fa-solid", "fa-trash");
  deleteIcon.style.marginLeft = "10px";
  deleteIcon.style.cursor = "pointer";

  deleteIcon.addEventListener("click", () => {
    newItem.remove();
    removeTaskFromLocal(taskText);
  });

  newItem.appendChild(deleteIcon);
  todoContent.appendChild(newItem);
}

// 4️⃣ Save task to localStorage
function saveTaskToLocal(taskText) {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(taskText);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// 5️⃣ Remove task from localStorage
function removeTaskFromLocal(taskText) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks = tasks.filter(task => task !== taskText);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
