function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
  
    if (taskInput.value === "") {
      alert("Please enter a task.");
      return;
    }
  
    if (taskList.children.length >= 5) {
      alert("You can only add up to 5 tasks.");
      return;
    }
  
    var li = document.createElement("li");
    li.textContent = taskInput.value;
  
    // Add functionality to mark task as completed (optional)
    // li.addEventListener("click", function() {
    //   this.parentElement.removeChild(this);
    //   document.getElementById("completedList").appendChild(this);
    // });
  
    taskList.appendChild(li);
    taskInput.value = ""; // Clear input field after adding task
  }
  
 
  
  
  function downloadList() {
    var taskList = document.getElementById("taskList");
    var completedList = document.getElementById("completedList");
  
    var tasks = [];
    var completedTasks = [];
  
    for (var i = 0; i < taskList.children.length; i++) {
      tasks.push(taskList.children[i].textContent);
    }
  
    for (var i = 0; i < completedList.children.length; i++) {
      completedTasks.push(completedList.children[i].textContent);
    }
  
    var listText = "Tasks:\n" + tasks.join("\n") + "\n\nCompleted Tasks:\n" + completedTasks.join("\n");
  
    var blob = new Blob([listText], { type: "text/plain" });
    var link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "todo_list.txt";
    link.click();
  }
  