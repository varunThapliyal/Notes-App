const tasks = {
    tasks: [{
        text: 'Grocery shopping',
        completed: true
    },{
        text: 'Clean yard',
        completed: false
    }, {
        text: 'Film course',
        completed: false
    }],
    getTasksToDo (){
       const incomtask=this.tasks.filter((task) => !task.completed
    )
       
       return incomtask

    }
   
}

console.log(tasks.getTasksToDo())