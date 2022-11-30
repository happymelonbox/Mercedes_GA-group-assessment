import TaskManager from "./TaskManager/taskManager.js"
window.addEventListener("load", function(){
 
  const modalForm = document.getElementById("modalForm");
  
  function displayCards(){
    let tasks = TaskManager.getAllTasks()
    const container = document.getElementById("container")
    tasks.map(eachTask => {
      TaskManager.createTaskHTML(eachTask, container)
    })
  }
 // displayCards()



//Drop Down Elements - Assigned To /  Status
var dropdownElementList = [].slice.call(
  document.querySelectorAll(".dropdown-toggle")
);
var dropdownList = dropdownElementList.map(function (dropdownToggleEl) {
  return new bootstrap.Dropdown(dropdownToggleEl);
});
//<<<<<<< main



function validateTaskForm (event) {
  event.preventDefault()
  if (validateForm(event)){saveChanges(event)
  }
  //else return Error
}


  function saveChanges(event){
    const nameOfTask = event.target.name.value
    const assign = event.target.AssignTo.value
    const description = event.target.description.value
    const calendar = event.target.date.value
    const status = event.target.status.value
    const task = new TaskManager(nameOfTask, description, assign, calendar, status)
    TaskManager.saveToLocal(task)

  }


modalForm.addEventListener("submit", (event)=>validateTaskForm(event));

  ///Form Validation Code
function validateName(event){
  let name = event.target.inputName.value
  if(name === "" || name.length < 4){
    alert("PUT IN A NAME !")
    return false
  }
  return true
}

function validateForm(event){
  if (!validateName(event)){
    return false
  }
  if (!description(event)){
    return false
  }
  if (!validateAssignTo(event)){
    return false
  }
  if (!DueDate(event)){
    return false
  }

  return true
}
 function description(event){
  if (event.target.description.value.length < 15){
    alert("Description Must be More Than 15 Characters")
    return false

   }
   return true
  }

 function validateAssignTo(event) {
   if (!event.target.AssignTo.value.length > 0)
     { alert("Task must be Assigned")
     return false
     }
     return true
 }

 function DueDate (event) {
 const validateDueDate = event.target.date.value

  const currentDate = new Date().toJSON().slice(0,10);
  if(validateDueDate.length === 0){
    alert("Due date can't be empty!");
    return false
  }
  if(validateDueDate < currentDate){
    alert("Date Must Be In The Future!");
    return false
  } return true
  }


//// Time and date
function formatDateAndTime() {
  let date = new Date();

  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }

  let mins = date.getMinutes();
  if (mins < 10) {
    mins = `0${mins}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  console.log(date.toDateString().split(" "))
  let dayDate = date.toDateString().split(" ")[2]
  let month = date.getMonth() + 1
  let year = date.toDateString().split(' ')[3]

  console.log(date);
  return date = `${day}: ${dayDate}/${month}/${year} - ${hours}:${mins}`;
}


  document.querySelector("#dateAndTime").textContent = formatDateAndTime()
  // document.getElementById("dateAndTime").innerHTML = date
})

