// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));

// Todo: create a function to generate a unique task id
function generateTaskId() {
    function generateTaskId() {
        const timestamp = new Date().getTime();
        const randomNum = Math.floor(Math.random() * 1000); // Adjust the range as needed
    
        return `${timestamp}-${randomNum}`;
    }
    
    const uniqueTaskId = generateTaskId();
    console.log(uniqueTaskId);
}

generateTaskId();


// Todo: create a function to create a task card
function createTaskCard(taskTitle, taskDescription, dueDate) {
        const taskCardHTML = `
            <div class="task-card">
                <h2>${taskTitle}</h2>
                <p>${taskDescription}</p>
                <p>Due Date: ${dueDate}</p>
            </div>
        `;
        return taskCardHTML; 

    }
    createTaskCard();

    const taskTitle = "Complete Challenge 5";
const taskDescription = "Create a function to generate a task card.";
const dueDate = "2022-12-31";

// Generate task card HTML
const taskCard = createTaskCard(taskTitle, taskDescription, dueDate);
console.log(taskCard);


// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {

}

// Todo: create a function to handle adding a new task
function handleAddTask(event){}

const addTaskbtn = document.getElementById('addTaskbtn')
const modal = document.getElementById('modal')

addTaskbtn.addEventListener('click', function(){
console.log('se hizo click en el boton')
modal.style.display='block';
});

const closeModal = document.getElementById('close')
closeModal.addEventListener('click', function(){
    modal.style.display='none';
    console.log('se cerró el modal');
});


//  const closeModal = document.getElementById('close');

//  closeModal.addEventListener('click', function(){
//     modal.style.display='none';

//  });

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {

});
