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

//AQUI BUSCAR CON JQUERY COMO HACER LA TASK CARD EN VEZ DE HACERLO CON EL CREATEELEMT
function createTaskCard(taskTitle, taskDescription, dueDate) {
        // const taskCardHTML = `
        //     <div class="task-card">
        //         <h2>${taskTitle}</h2>
        //         <p>${taskDescription}</p>
        //         <p>Due Date: ${dueDate}</p>
        //     </div>
        // `;


        
       const taskCard = $('<div>').addClass('task-cards');

        //Agregar contenido a la taskcard
        taskCard.append($('<h3>').text(taskTitle));
        taskCard.append($('<p>').text('Status: ' + taskDescription));
        taskCard.append($('<p>').text('Due Date: ' + dueDate));
      
      
        //Agregar la taskcard al contenedor
        $('#task-card').append(taskCard);


        
        // createTaskCard(taskCard);
        // const h2el = document.createElement('h3');
        // const text = document.getElementById('taskTitle');
        // h2el.textContent = 'mi titulo';     
        // const todoList1 = document.getElementById('todo-cards');
        // todoList1.appendChild(h2el);
        console.log('taskCard', taskCard);

        taskArr.push({
            taskTitle,
            taskDescription,
            dueDate
        })

        localStorage.setItem("tasks", JSON.stringify(taskArr))

        return taskCard

       
      }
      
        
    







// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {
    //primero, cuando prpesiono el boton de add task , se renderea mis inputs 
        //const password = localStorage.getItem('password');
      console.log("TASK LIST:¨", taskList)

      if (taskList) {
        for (const task of taskList) {
            createTaskCard(task.taskTitle, task.taskDescription, task.dueDate)
          }
      }

      
    //     userEmailSpan.textContent = email;
    //     userPasswordSpan.textContent = password;
    //   }
//     const tInput =document.getElementById('taskTitle').value;
//     localStorage.setItem('TaskTitle', JSON.stringify(tInput));
//     console.log('se ve el title en la lista');
}

// Todo: create a function to handle adding a new task
function handleAddTask(event){}




// Todo: create a function to handle deleting a task
function handleDeleteTask(event){

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {
renderTaskList();

const addTaskbtn = document.getElementById('addTaskbtn')
const modal = document.getElementById('modal');
//const displayModal = getElementById('submitBtn');
//const todoList = getElementById('to-do');

addTaskbtn.addEventListener('click', function(){
console.log('se hizo click en el boton')
modal.style.display='block';
});

const closeModal = document.getElementById('close')
closeModal.addEventListener('click', function(){
    modal.style.display='none';
    console.log('se cerró el modal');
});



// esta mal const displayModal = document.getElementById('submitBtn');
const submitBtn = document.getElementById('submitBtn');
const todoList = document.getElementById('to-do');

// displayModal.addEventListener('click', function() {
//     const modalContent = document.getElementById('modalContent');
//     const taskText = modalContent.value; // Obtener el texto del modal

//     // Crear un nuevo elemento de lista con el texto ingresado
//     const newTask = document.createElement('li');
//     newTask.textContent = taskText;

//     // Añadir el nuevo elemento a la lista de tareas
//     todoList.appendChild(newTask);

// });



submitBtn.addEventListener('click', function() {
    const titleInput = document.getElementById('taskTitle').value;
   
    const taskDescription= document.getElementById('taskDescription').value;
    
    const dueDate = document.getElementById('dueDate').value;
    

    createTaskCard(titleInput, taskDescription, dueDate);
    // Mostrar el modal para agregar una nueva tarea
    // Puedes agregar aquí la lógica para mostrar el modal si es necesario
});




//lo que quuiero es que lo añadido al modal, 
// se guarde en la lista de todo
//puedo hacer un add event listener para cuando se presione 
//el add task, se muestre en la todo list 


// function modalInfoDisplay(){}
// const displayModal = document.getElementById('submitbtn')
// displayModal.addEventListener('click', function(){
//     console.log('se ve lo que puse en el modal');
// const modalContent = document.getElementById('modalContent');
// modalContent.textContent='taskTitle, taskDescription, dueDate'
// });



})
//DUE DATE PICKER 
// $( function() {
//     $( "#dueDate" ).datepicker();
//   } );
// })
