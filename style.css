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
    list.push({text: taskValue, checked: false});
    task.value = '';
    renderList();
    saveData();
  }
}

function renderList() {
    listDisplay.innerHTML = '';

    list.forEach((item, index) => {
        const taskItem = document.createElement('div');
        taskItem.className = `task-item ${item.checked ? 'checked' : 'unchecked'}`;

        const taskText = document.createElement('span');
        taskText.className = 'task-text';
        taskText.textContent = item.text;

        const deleteBtn = document.createElement('span');
        deleteBtn.className = 'delete-btn';
        deleteBtn.innerHTML = '\u00D7';
        deleteBtn.onclick = () => { deleteTask(index); };

        taskItem.appendChild(taskText);
        taskItem.appendChild(deleteBtn);

        taskItem.onclick = () => {
          item.checked = !item.checked;
            taskItem.classList.toggle('checked');
            taskItem.classList.toggle('unchecked');
            saveData();
        };

        listDisplay.appendChild(taskItem);
});
}

function deleteTask(index) {
    list.splice(index, 1);
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
