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
    const deleteButton = document.createElement("button");

    taskName.textContent = taskText;
    deleteButton.textContent = "Delete";

    deleteButton.onclick = function () {
        taskItem.remove();
    };

    taskItem.appendChild(taskName);
    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);

    taskInput.value = "";
}