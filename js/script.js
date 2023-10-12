
document.getElementById('add-btn').addEventListener('click', function() {
   
  var taskInput = document.getElementById('task-input');
  
  if (taskInput.value.trim() !== '') {

      var table = document.getElementById("task-list");

      // Create new row
      var row = table.insertRow(-1);

      // Create cells in the row
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);

     // Add data to cells
     cell1.innerHTML = taskInput.value;

     // Add Edit button to second cell 
     cell2.innerHTML = "<button class='edit-button'>Edit</button>";

     // Add Delete button to third cell 
     cell3.innerHTML = "<button class='delete-button'>Delete</button>";

     taskInput.value = '';

    }
});

// Event delegation for edit and delete buttons

document.getElementById('task-list').addEventListener('click', function(e) {

if(e.target && e.target.classList.contains('edit-button')){

    let task = e.target.parentElement.previousElementSibling;
    let newValue = prompt("Edit the task", task.textContent);

    if(newValue && newValue.trim() !== '') {
        task.textContent = newValue;
    }
 }

 if(e.target && e.target.classList.contains('delete-button')){
      if (confirm("Are you sure you want to delete this task?")) {
        let row = e.target.parentElement.parentElement;
        row.parentNode.removeChild(row);
    } else {   
      return false;
    }
 }
});
