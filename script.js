// the Date Functionality

let today = new Date();
let dd = String(today.getDate()).padStart(2,'0');
let mm = String(today.getMonth() + 1).padStart(2, '0');
let yyy = today.getFullYear();
let hh= String(today.getHours()).padStart(2,'0');
let min = String(today.getMinutes()).padStart(2,'0');


let time = `${hh}:${min}`;
today = `${dd}-${mm}-${yyy}`;
let dateSpan = document.getElementById('dateSpan');


dateSpan.innerHTML= `<strong>Date:</strong> ${today} |
 <strong>Time:</strong> ${time}`;

 let dateSpanMobile = document.getElementById('dateSpanMobile');
 dateSpanMobile.innerHTML= `<strong>Date:</strong> ${today} |
 <strong>Time:</strong> ${time}`;




// To Do Modal JS
let taskName = document.getElementById('taskName');
let assignedTo = document.getElementById('assignedTo');
let form = document.getElementById('form');
let setStatus = document.getElementById('setStatus');
let errorElement = document.getElementById('errorMsg');
let description = document.getElementById('description');
var modal = document.getElementById("form");
var btn = document.getElementById("myBtn");
var span = document.getElementById("closebtn");
let dueDate = document.getElementById('dueDate');

let modalOverlay = document.getElementById('modalOverlay');
let mobileAddTaskBtn = document.getElementById('addTaskBtnMobile');

dueDate.addEventListener("click", function () {
    let today = new Date();
    let dateToday = String(today.getDate()).padStart(2, "0");
    let monthToday = String(today.getMonth() + 1).padStart(2, "0");
    let yearToday = today.getFullYear();
    let minDate = `${yearToday}-${monthToday}-${dateToday}`;
    dueDate.min = minDate;
  });


btn.onclick = function() {
  modal.style.display = "block";
  modalOverlay.style.opacity = "0.3";
  modalOverlay.style.backgroundColor = "gray";
  
}

span.onclick = function() {
  modal.style.display = "none";
  modalOverlay.style.opacity = "1";
  modalOverlay.style.backgroundColor = "transparent";
}
mobileAddTaskBtn.onclick = function() {
    modal.style.display = "block";
    modalOverlay.style.opacity = "0.3";
  modalOverlay.style.backgroundColor = "gray";
   
  };

form.addEventListener('submit', (e) => {
    let messages = []
    if(taskName.value === ''){
        messages.push('Task Name is Required')
    }

    if (taskName.value.length < 8){
        messages.push('Task Name must be longer than 8 characters')
    }
    if (assignedTo.value == "" ){
        messages.push('Task must be assigned')
    }
    if (setStatus.value == ""){
        messages.push('Please set a status.')
    }
    if (dueDate.value === ""){
        messages.push('Please set a due date!')
    }
    if (description.value == ""){
        messages.push('Please write a description')
    }
    if (description.value.length < 20){
        messages.push('Please write a description of at least 20 characters')
    }
    if (messages.length > 0){
        e.preventDefault()
        errorElement.innerText = messages.join('. ')
    }
    
})


 //Begin Javascript for adding todo


 



 class NewTask {
    constructor(newTaskName, newAssignTo, newDueDate, newSelectStatus, newAddDescription, newID) {
      this.newTaskName = newTaskName;
      this.newAssignTo = newAssignTo;
      this.newDueDate = newDueDate;
      this.newSelectStatus = newSelectStatus;
      this.newAddDescription = newAddDescription;
      this.newID = Math.floor(Math.random()*10000);
    }
    // get taskName() {
    //     return this.newTaskName;
    // }

    // get assignTo() {
    //     return this.newAssignTo;
    // }

    // get dueDate() {
    //     return this.newDueDate;
    // }

    // get selectStatus() {
    //     return this.newSelectStatus;
    // }

    // get addDescription() {
    //     return this.newAddDescription;
    // }

    incrementnewID() {
        this.newID++;
    }
  }

///logic in plain english 

//assigning lets

let toDoItems = [];
 let inProgressItems = [];
 let reviewItems = [];
 let doneItems = [];
let modalBtn = document.getElementById('modalBtn');
let cardsToDo = document.getElementById('cardsToDo');



/// extract information from input fields on submit button click
modalBtn.addEventListener('click', 
    function extractData(){
    let ourNewTask = new NewTask (`${taskName.value}`,`${assignedTo.value}`,`${dueDate.value}`,`${setStatus.value}`,`${description.value}`,`${description.value}`);
    // toDoItems.push(ourNewTask);
    // console.log(toDoItems);
    if (setStatus.value === "modalToDo") {
        toDoItems.push(ourNewTask);
    } if (setStatus.value === "modalInProgress") {
        inProgressItems.push(ourNewTask);
    }if (setStatus.value === "modalReview") {
        reviewItems.push(ourNewTask);
    } if (setStatus.value === "modalDone") {
        doneItems.push(ourNewTask);
    }


    card = `<span><img src="./Resources/redbox.png" alt=""></span>
    <h3> ${taskName.value} </h3> 
    <p class="taskDescriptionText"> ${description.value} </p>
    <img class= "profileCard" src="./Resources/ProfileUser1.png"> 
    <hr> 
    <p class="dueDateText"><strong>DUE:</strong><span>${dueDate.value}</span></p>`


    function addNewCardDiv() {
        const newDiv = document.createElement("div");
        cardsToDo.insertAdjacentElement('beforeend', newDiv);
        newDiv.classList.add("card1");
        newDiv.innerHTML = card;
    };
console.log(card);
    addNewCardDiv();
    
    
})
