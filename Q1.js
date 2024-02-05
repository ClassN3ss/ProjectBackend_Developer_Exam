document.addEventListener('DOMContentLoaded', () => {
    const todoListElement = document.getElementById('todo-list');
    const todoForm = document.getElementById('todo-form');
  
    // Function to fetch To-Do List from the API
    function fetchTodos() {
      fetch('/todos')  // Assuming your API is hosted on the same server
        .then(response => response.json())
        .then(todos => {
          renderTodos(todos);
        })
        .catch(error => console.error('Error fetching To-Do List:', error));
    }
  
    // Function to render To-Do List
    function renderTodos(todos) {
      todoListElement.innerHTML = '';
      todos.forEach(todo => {
        const listItem = document.createElement('li');
        listItem.textContent = todo.task;
        listItem.dataset.todoId = todo.id;
        todoListElement.appendChild(listItem);
  
        // Add event listener for deleting a To-Do
        listItem.addEventListener('click', () => {
          deleteTodo(todo.id);
        });
      });
    }
  
    // Add event listener for submitting the form
    todoForm.addEventListener('submit', function (event) {
      event.preventDefault();
      const taskInput = document.getElementById('task');
      const task = taskInput.value;
  
      // Call API to add To-Do
      fetch('http://localhost:3000/todoss', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ task }),
      })
        .then(response => response.json())
        .then(newTodo => {
          fetchTodos(); // Fetch updated To-Do List
          taskInput.value = ''; // Clear input field
        })
        .catch(error => console.error('Error adding To-Do:', error));
    });
  
    // Function to delete a To-Do
    function deleteTodo(todoId) {
      // Call API to delete To-Do
      fetch(`/todos/${todoId}`, {
        method: 'DELETE',
      })
        .then(() => {
          fetchTodos(); // Fetch updated To-Do List
        })
        .catch(error => console.error('Error deleting To-Do:', error));
    }
  
    // Fetch initial To-Do List
    fetchTodos();
  });
  