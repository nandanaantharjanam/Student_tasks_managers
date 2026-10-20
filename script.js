function addTask() {
  const taskInput = document.getElementById("taskInput");
  const deadlineInput = document.getElementById("deadlineInput");
  const taskList = document.getElementById("taskList");

  const taskName = taskInput.value;
  const deadline = deadlineInput.value;

  if (taskName === "" || deadline === "") {
    alert("Please enter a task and deadline!");
    return;
  }

  
const li = document.createElement("li");

li.appendChild(
  document.createTextNode(
    taskName + " - Deadline: " + deadline + " "
  )
);

const deleteButton = document.createElement("button");
deleteButton.textContent = "Delete";

  const completeButton = document.createElement("button");
completeButton.textContent = "Completed";
  completeButton.onclick = function() {
  li.style.textDecoration = "line-through";
  saveTasks();
};

deleteButton.onclick = function() {
  li.remove();
  saveTasks();
};

  li.appendChild(completeButton);
li.appendChild(deleteButton);
taskList.appendChild(li);
  saveTasks();
  
function saveTasks() {
  localStorage.setItem(
    "studentTasks",
    document.getElementById("taskList").innerHTML
  );
}
  taskInput.value = "";
  deadlineInput.value = "";
}
