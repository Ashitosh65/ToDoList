function addTask() {
  
    const taskInput = document.getElementById('task');
    const dateInput = document.getElementById('date');
  
    const taskList = document.getElementById('task-list');
  
    if (taskInput.value.trim() === '') {
      alert('Please enter a task.');
      return;
    }
  
    const newRow = taskList.insertRow();
    newRow.innerHTML = `
      <td>${taskInput.value}</td>
      <td>${dateInput.value}</td>
      
      <td class="actions">
        <button onclick="toggleCompleted(this.parentNode.parentNode)">Strike</button>
        </td> 
      <td class="actions">
        <button onclick="deleteTask(this.parentNode.parentNode)">Delete</button>
      </td>
    `;
  
    taskInput.value = '';
    dateInput.value = '';
  }
  
  function toggleCompleted(row) {
    row.classList.toggle('completed');
  }
  
  function deleteTask(row) {
    row.remove();
  }
  