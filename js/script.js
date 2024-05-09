// Retrieve tasks and nextId from localStorage
 let nextId = JSON.parse(localStorage.getItem("nextId"));
let taskArr = JSON.parse(localStorage.getItem("tasks")) || [];





// Todo: create a function to generate a unique task id

function generateTaskId() {
    const timestamp = new Date().getTime();
    const randomNum = Math.floor(Math.random() * 1000); // Adjust the range as needed

    return `${timestamp}-${randomNum}`;
}



// Todo: create a function to create a task card
function createTaskCard(id, taskTitle, taskDescription, dueDate, color) {


    const taskCard = $('<div>').addClass('task-cards').attr('id', id).attr("style", "background-color: " + color);

    //Agregar contenido a la taskcard
    taskCard.append($('<h3>').text(taskTitle));
    taskCard.append($('<p>').text('Status: ' + taskDescription));
    taskCard.append($('<p>').text('Due Date: ' + dueDate));
    const delBtn = $('<button>').addClass("delBtn").attr('id', id).text('Delete')
    taskCard.append(delBtn);


    $(function () {
        $('.task-cards').draggable({
            opacity:0.7,
            zIndex:100
        });
        $(".lane").droppable({
            accept: '.task-cards', 
            drop: handleDrop
        });
    })

    delBtn.on('click', handleDeleteTask)

    //Agregar la taskcard al contenedor
    $('#task-card').append(taskCard);

    //CUANDO HAGO ESTO DE ABAJO, LAS TASK CXARD SE VAN AGREGANDO PERO AL DONE
    // $('#in-progress-cards').append(taskCard);
    // $('#done-cards').append(taskCard);

    console.log('taskCard', taskCard);


}


// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {


 
    $('#task-card').empty();
    if (taskArr) {
        for (const task of taskArr) {
            createTaskCard(task.id, task.titleInput, task.taskDescription, task.taskDate, task.color)
        }
    }



}

// Todo: create a function to handle adding a new task
function handleAddTask(event) {


    modal.style.display = 'block';

}


// Todo: create a function to handle deleting a task
function handleDeleteTask(event) {

   // console.log("event: ", event)
    //console.log(event.target)
    const id = event.target.id;
    console.log("ID: ", id);
    // console.log('me diste click: ', event.target.id)
   
    
    let newList = taskArr.filter((task) => task.id != id)

    console.log("This us new task list === ", newList)
    localStorage.setItem("tasks", JSON.stringify(newList))
   taskArr = newList
    renderTaskList();
}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {


    console.log(event.target)
    console.log(ui.draggable)

    const hiddenNumber = ui.draggable.data('number');
    ui.draggable.text(hiddenNumber);


}
//DUE DATE PICKER 

$(function () {
    $("#dueDate").datepicker();
});

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {
    renderTaskList();

    const addTaskbtn = document.getElementById('addTaskbtn')
    const modal = document.getElementById('modal');

    addTaskbtn.addEventListener('click', handleAddTask);

    const closeModal = document.getElementById('close')
    closeModal.addEventListener('click', function () {
        modal.style.display = 'none';
        //console.log('se cerró el modal');

    });





    const submitBtn = document.getElementById('submitBtn');
    const todoList = document.getElementById('to-do');




submitBtn.addEventListener('click', function () {
        let color = "red"

        const titleInput = document.getElementById('taskTitle').value;

        const taskDescription = document.getElementById('taskDescription').value;

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
        let id =generateTaskId();

        taskArr.push({
            id,
            titleInput,
            taskDescription,
            taskDate,
            color
        })
    
        localStorage.setItem("tasks", JSON.stringify(taskArr))
        createTaskCard(id, titleInput, taskDescription, taskDate, color);
        const modal = document.getElementById('modal')
        modal.style.display = 'none';

      
    });

    const delBtns = $(".delBtn");

    for (let i = 0; i < delBtns.length; i++) {
        delBtns[i].addEventListener('click', handleDeleteTask)
    }

})



