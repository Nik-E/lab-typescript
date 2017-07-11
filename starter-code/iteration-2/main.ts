// Add the reference to the "TodoInterface"

// 1. Create a class Todo that implements the Interface created before.

class Todo implements ToDoInterface {
  constructor(
    public myList: Array<string> = []  // property A
  ){}

  addTask(task: string) {
    return myList.push(task);
  };               // METHOD A

  listAllTasks(){
    return myList.forEach((oneTask)=>{
    console.log(oneTask);
    });
  }                       // METHOD B

  deleteTask(task: string){
    myList.forEach((oneTask)=>{

      myList.indexOf(oneTask);

      if(myList.indexOf(oneTask) === myList.indexOf(task)){

        myList.splice(myList.indexOf(task),1);
        console.log('I DELETED TASK: ' + task + ' GREAT JOB, MOTHERFUCKER!')
        console.log(myList.length);
      }

    });

      return myList.length
    };            // METHOD C

}








// Execution
let myTodoList = new Todo ();
console.log("Number of items:", myTodoList.addTask('This is our first task'));
console.log("Number of items:", myTodoList.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodoList.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodoList.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodoList.addTask('Finish this iteration 3!! 🤓'));
myTodoList.listAllTasks();
console.log("Number of items:", myTodoList.deleteTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodoList.deleteTask('Finish this iteration 2!! 🤓'));
myTodoList.listAllTasks();
