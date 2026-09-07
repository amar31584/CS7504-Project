function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    const taskItem = document.createElement("li");
    const taskName = document.createElement("span");
    const completeButton = document.createElement("button");
    const deleteButton = document.createElement("button");

    taskName.textContent = taskText;

    completeButton.textContent = "Complete";
    deleteButton.textContent = "Delete";

    completeButton.onclick = function () {
        taskItem.classList.toggle("completed");

        if (taskItem.classList.contains("completed")) {
            completeButton.textContent = "Undo";
        } else {
            completeButton.textContent = "Complete";
        }
    };

    deleteButton.onclick = function () {
        taskItem.remove();
    };

    taskItem.appendChild(taskName);
    taskItem.appendChild(completeButton);
    taskItem.appendChild(deleteButton);

    taskList.appendChild(taskItem);

    taskInput.value = "";
}