let inputTask = document.querySelector("input");
let addTask = document.querySelector("button");
let todoContent = document.querySelector(".todo_content");

addTask.addEventListener("click", () => {
  let inputContent = inputTask.value.trim();

  if (inputContent !== "") {
    // Create <p> for the task
    let newItem = document.createElement("p");
    newItem.classList.add("todo_item"); // optional class for styling
    newItem.innerText = inputContent;

    // Create <i> trash icon
    let deleteIcon = document.createElement("i");
    deleteIcon.classList.add("fa-solid", "fa-trash");
    deleteIcon.style.marginLeft = "10px";
    deleteIcon.style.cursor = "pointer";

    // Add delete functionality
    deleteIcon.addEventListener("click", () => {
      newItem.remove();
    });

    // Append the icon to the task and the task to the list
    newItem.appendChild(deleteIcon);
    todoContent.appendChild(newItem);

    // Clear input
    inputTask.value = "";
  } else {
    alert("Please enter a task");
  }
});
