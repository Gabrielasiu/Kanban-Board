// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));






// Todo: create a function to generate a unique task id

function generateTaskId() {
        const timestamp = new Date().getTime();
        const randomNum = Math.floor(Math.random() * 1000); // Adjust the range as needed
    
        return `${timestamp}-${randomNum}`;
    }
    
    const uniqueTaskId = generateTaskId();
    console.log(uniqueTaskId);

generateTaskId();

///////////////////////////////////////////////////////////////////////////////////////
// Todo: create a function to create a task card
const taskArr = []
function createTaskCard(id, taskTitle, taskDescription, dueDate, color) {
    
        
       const taskCard = $('<div>').addClass('task-cards').attr('id', id).attr("style", "background-color: " + color);

        //Agregar contenido a la taskcard
        taskCard.append($('<h3>').text(taskTitle));
        taskCard.append($('<p>').text('Status: ' + taskDescription));
        taskCard.append($('<p>').text('Due Date: ' + dueDate));
        const delBtn = $('<button>').addClass("delBtn").attr('id', id).text('Delete')
        taskCard.append(delBtn);

      
        $(function() {
            $("#" + id).draggable();
            $(".drop-container").droppable({
                drop: handleDrop
            });
        })

        delBtn.on('click', handleDeleteTask)
      
        //Agregar la taskcard al contenedor
        $('#task-card').append(taskCard);


        console.log('taskCard', taskCard);


        taskArr.push({
            id,
            taskTitle,
            taskDescription,
            dueDate
        })

        localStorage.setItem("tasks", JSON.stringify(taskArr))

        return taskCard

       
      }
      

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {
    
        $( function() {
            $( "#draggable" ).draggable();
        })
      console.log("TASK LIST:¨", taskList)

      if (taskList) {
        for (const task of taskList) {
            createTaskCard(task.id, task.taskTitle, task.taskDescription, task.dueDate)
          }
      }

      
    
}

// Todo: create a function to handle adding a new task
function handleAddTask(event){

    console.log('se hizo click en el boton')
modal.style.display='block';

}




// Todo: create a function to handle deleting a task
function handleDeleteTask(event){

        console.log("event: ", event)
        const id = event.target.id;
        console.log("ID: ", id);
        console.log('me diste click: ', event.target.id)
        console.log("LAS TASKS: ", taskList);
        localStorage.setItem("tasks", JSON.stringify(taskList.filter((task) => task.id != id)))
       
    

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {
    
    const hiddenNumber = ui.draggable.data('number');
    ui.draggable.text(hiddenNumber);


}


// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {
renderTaskList();

const addTaskbtn = document.getElementById('addTaskbtn')
const modal = document.getElementById('modal');

addTaskbtn.addEventListener('click', handleAddTask);

const closeModal = document.getElementById('close')
closeModal.addEventListener('click', function(){
    modal.style.display='none';
    console.log('se cerró el modal');
});





const submitBtn = document.getElementById('submitBtn');
const todoList = document.getElementById('to-do');





submitBtn.addEventListener('click', function() {
    let color = "red"

    const titleInput = document.getElementById('taskTitle').value;
   
    const taskDescription= document.getElementById('taskDescription').value;
    
    const taskDate = document.getElementById('dueDate').value;
    const dueDate = new Date(taskDate)
    const todayDate = new Date()
    console.log("dueDate: ", dueDate)
    console.log("fechaDeHoy: ", todayDate)
    console.log("es la misma fecha? ", dueDate === todayDate)

    if (dueDate === todayDate) {
        color = "yellow"
    }

    console.log("COLOR: ", color)

    createTaskCard(generateTaskId(), titleInput, taskDescription, taskDate, color);
});

const delBtns = $(".delBtn"); 

for (let i = 0; i < delBtns.length; i++) {
    delBtns[i].addEventListener('click', handleDeleteTask)
}

})


//DUE DATE PICKER 

$( function() {
    $( "#dueDate" ).datepicker();
  } );
