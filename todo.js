// todo.js

// Array to store tasks
let tasks = [];

// Add a task
function addTask(task) {
    if (task) {
        tasks.push(task);
        console.log(`Task "${task}" added successfully!`);
    } else {
        console.log("Task cannot be empty.");
    }
}

// Remove a task by index
function removeTask(index) {
    if (index >= 0 && index < tasks.length) {
        const removedTask = tasks.splice(index, 1);
        console.log(`Task "${removedTask}" removed successfully!`);
    } else {
        console.log("Invalid task index.");
    }
}

// List all tasks
function listTasks() {
    if (tasks.length > 0) {
        console.log("Your To-Do List:");
        tasks.forEach((task, index) => {
            console.log(`${index + 1}. ${task}`);
        });
    } else {
        console.log("Your To-Do List is empty.");
    }
}

// Example usage
addTask("Learn JavaScript");
addTask("Build a project");
listTasks();
removeTask(0);
listTasks();
