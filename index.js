let list = [];
const task = document.getElementById('task');
const add = document.getElementById('add');
const listDisplay = document.getElementById('list');

function loadData() {
    const savedData = localStorage.getItem("data");
    if (savedData) {
      list = JSON.parse(savedData); // Convert the string back to an array
      renderList(); // Display the saved tasks
    }
  }

function saveData() {
    localStorage.setItem("data", JSON.stringify(list));
}

function addTask() {
  const taskValue = task.value.trim();

  if (taskValue !== '') {
    list.push(taskValue);
    task.value = '';
  }

  renderList();
    saveData();
}

function renderList() {
    listDisplay.innerHTML = '';
    list.forEach((item, value) => {
        const taskItem = document.createElement('div');
        taskItem.className = 'task-item unchecked';
    
        const taskText = document.createElement('span');
        taskText.className = 'task-text';
        taskText.textContent = item;
        const deleteBtn = document.createElement('span');
        deleteBtn.className = 'delete-btn';
        deleteBtn.innerHTML = '\u00D7';
        deleteBtn.onclick = () => { deleteTask(value); };

        taskItem.appendChild(taskText);
        taskItem.appendChild(deleteBtn);

        taskItem.onclick = () => {
            taskItem.classList.toggle('checked');
            taskItem.classList.toggle('unchecked');
        };

        listDisplay.appendChild(taskItem);
});
}

function deleteTask(value) {
    list.splice(value, 1);
    saveData();
    renderList();
}

add.addEventListener('click', addTask);
task.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    addTask();
  }
});



window.addEventListener('load', loadData);

// Add Delete Button