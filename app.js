// Get the necessary DOM elements
const listsContainer = document.getElementById('lists');
const inputContainer = document.getElementById('inputContainer');
const addBtn = document.getElementById('addBtn');

let inputCount = 0; // Track the number of input fields

// Handle adding a new task
addBtn.addEventListener('click', () => {
    const inputField = document.createElement('input');
    inputField.setAttribute('type', 'text');
    inputField.setAttribute('placeholder', 'Enter a new task');
    inputField.classList.add('input');
    inputField.addEventListener('keypress', handleKeyPress);
    inputContainer.appendChild(inputField);
    inputField.focus(); // Set focus on the new input field
});

// Handle key press event for input fields
function handleKeyPress(event) {
    const key = event.key;
    if (key === 'Enter') {
        const taskText = event.target.value.trim();
        if (taskText) {
            const taskItem = document.createElement('li');
            taskItem.innerHTML = `
        <span>${taskText}</span>
        <div>
            <button class="deleteBtn">Delete</button>
            <button class="changeBtn">Done</button>
        </div>
        
      `;
            listsContainer.appendChild(taskItem);
            event.target.remove(); // Remove the input field
        }
    }
}

// Handle deleting a task
listsContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('deleteBtn')) {
        const taskItem = event.target.parentElement.parentElement;
        taskItem.remove();
    }
});

// Handle marking a task as done
listsContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('changeBtn')) {
        const taskItem = event.target.parentElement.parentElement;
        taskItem.classList.toggle('completed');
    }
});
