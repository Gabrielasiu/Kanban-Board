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
function createTaskCard(task) {




}
//  TASKK-CARD MINIPROJECT    function createProjectCard(project) {
//         const taskCard = $('<div>')
//           .addClass('card project-card draggable my-3')
//           .attr('data-project-id', project.id);
//         const cardHeader = $('<div>').addClass('card-header h4').text(project.name);
//         const cardBody = $('<div>').addClass('card-body');
//         const cardDescription = $('<p>').addClass('card-text').text(project.type);
//         const cardDueDate = $('<p>').addClass('card-text').text(project.dueDate);
//         const cardDeleteBtn = $('<button>')
//           .addClass('btn btn-danger delete')
//           .text('Delete')
//           .attr('data-project-id', project.id);
//         cardDeleteBtn.on('click', handleDeleteProject);
      
        // ? Sets the card background color based on due date. Only apply the styles if the dueDate exists and the status is not done.
        
      
        // ? Return the card so it can be appended to the correct lane.
       // return taskCard;
        
  //    }
//}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {

}

// Todo: create a function to handle adding a new task
function handleAddTask(event){
 $("btn btn-success").click();
    console.log(clic);
}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {

});
