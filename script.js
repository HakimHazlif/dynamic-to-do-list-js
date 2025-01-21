document.addEventListener("DOMContentLoaded", function () {
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
      alert("Enter a task");
    } else {
      const taskEl = document.createElement("li");
      taskEl.textContent = taskText;
      const removeBtn = document.createElement("button");
      removeBtn = "Remove";
      removeBtn.classList.add("remove-btn");

      removeBtn.addEventListener("click", function () {
        taskEl.remove;
      });

      taskEl.appendChild(removeBtn);
      taskList.appendChild(taskEl);
      taskInput.value = "";
    }
  }

  addButton.addEventListener("click", addTask);
  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") addTask();
  });

  document.addEventListener("DOMContentLoaded", addTask);
});
