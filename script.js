function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    const taskItem = document.createElement("li");

    taskItem.textContent = taskText;

    taskItem.addEventListener("click", function () {
        taskItem.remove();
    });

    taskList.appendChild(taskItem);

    taskInput.value = "";
}
