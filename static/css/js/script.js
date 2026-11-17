const taskTitleInput = document.getElementById("task-title");

const taskDateInput = document.getElementById("task-date");

const taskPriorityInput = document.getElementById("task-priority");

const saveTaskButton = document.getElementById("save-task-btn");

const taskList = document.getElementById("task-list");


// Add click event to Save Task button

saveTaskButton.addEventListener("click", function () {

    // Get input values

    const title = taskTitleInput.value.trim();

    const dueDate = taskDateInput.value;

    const priority = taskPriorityInput.value;


    // Validate input fields

    if (title === "" || dueDate === "" || priority === "") {

        alert("Please fill in all three fields.");

        return;
    }


    // Create a new task row

    const taskRow = document.createElement("div");

    taskRow.className = "task-row";


    // Create task details

    const taskDetails = document.createElement("div");

    const taskHeading = document.createElement("h3");

    taskHeading.textContent = title;


    const taskInfo = document.createElement("p");

    const readablePriority =
        priority.charAt(0).toUpperCase() + priority.slice(1);

    taskInfo.textContent =
        "Due: " + dueDate + " | Priority: " + readablePriority;


    // Add task details

    taskDetails.appendChild(taskHeading);

    taskDetails.appendChild(taskInfo);


    // Create task status

    const taskStatus = document.createElement("span");

    taskStatus.className = "status pending";

    taskStatus.textContent = "Pending";


    // Add elements to task row

    taskRow.appendChild(taskDetails);

    taskRow.appendChild(taskStatus);


    // Display task in dashboard

    taskList.appendChild(taskRow);


    // Clear input fields

    taskTitleInput.value = "";

    taskDateInput.value = "";

    taskPriorityInput.value = "";


    // Display success message

    alert("Task added successfully!");

});