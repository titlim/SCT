// script.js

function addTask() {
    const taskInput = document.getElementById('task');
    const datetimeInput = document.getElementById('datetime');
    
    const task = taskInput.value;
    const datetime = datetimeInput.value;

    if (task === '' || datetime === '') {
        alert('Please enter both a task and date/time.');
        return;
    }

    const taskList = document.getElementById('task-list');
    const li = document.createElement('li');

    const taskText = document.createElement('span');
    taskText.textContent = `${task} (Due: ${new Date(datetime).toLocaleString()})`;
    li.appendChild(taskText);

    const completeButton = document.createElement('button');
    completeButton.textContent = 'Complete';
    completeButton.onclick = function() {
        li.classList.toggle('completed');
    };
    li.appendChild(completeButton);

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.className = 'edit';
    editButton.onclick = function() {
        const newTask = prompt('Edit task:', task);
        const newDatetime = prompt('Edit date/time:', datetime);

        if (newTask !== null && newDatetime !== null) {
            taskText.textContent = `${newTask} (Due: ${new Date(newDatetime).toLocaleString()})`;
        }
    };
    li.appendChild(editButton);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function() {
        taskList.removeChild(li);
    };
    li.appendChild(deleteButton);

    taskList.appendChild(li);
    taskInput.value = '';
    datetimeInput.value = '';
}
