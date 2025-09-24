let Tasks = [];

let addTask = (task)=>{
    Tasks.push(task);
    console.log(task + " has been added to my Tasks!");
    console.log("Number of task in my Tasks list is" + Tasks.length);
}


let listAllTasks = ()=>{
    
  //  for(let i=0;i<Tasks.length;i++){
   //     console.log(Tasks[i]);
  //  }

Tasks.forEach(
    (task)=>{
        console.log(task);
    }
)
}


let deleteTasks = (task)=>{
    let index = Tasks.indexOf(task);
    if(index > -1){
    
    Tasks.splice(index,1);
    console.log(task + "task has benn removed");
    }else {
        console.log(task + " work was not found");
    }
    console.log("number of task in my Tasks is " + Tasks.length);

}


addTask("Work");
addTask("Eat");
listAllTasks();
deleteTasks("Work");
listAllTasks();