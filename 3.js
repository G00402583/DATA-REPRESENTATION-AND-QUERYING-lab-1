// Initialize an empty array to store tasks
let Tasks = [];

// Initialize an empty array to store tasks
let addTask = (task)=>{
    Tasks.push(task);
    console.log(task + " has been added to my Tasks!");
    console.log("Number of task in my Tasks list is" + Tasks.length);
}

// Function to list all tasks
let listAllTasks = ()=>{
    
  //  for(let i=0;i<Tasks.length;i++){
   //     console.log(Tasks[i]);
  //  }

    // Loop through each task and print it
Tasks.forEach(
    (task)=>{
        console.log(task);
    }
)
}

// Function to delete a task from the list
let deleteTasks = (task)=>{ 
    let index = Tasks.indexOf(task); // Find the index of the task
    if(index > -1){
    
    Tasks.splice(index,1);    // Remove the task if found
    console.log(task + "task has benn removed");
    }else {
        console.log(task + " work was not found");
    }
    console.log("number of task in my Tasks is " + Tasks.length);

}

// Test the functions
addTask("Work");
addTask("Eat");
listAllTasks();
deleteTasks("Work");
listAllTasks();
