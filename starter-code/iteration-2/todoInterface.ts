// Write the interface for class Todo. It must have:
// - An array of strings as a property.
// - Method for adding task where will receive a string, doesn't return anything.
// - Method for listing all task in the console, doesn't return anything.
// - Method for delete a task where will receive a string, doesn't return anything.


interface ToDoInterface{   // CHECKLIST
 myList: Array<string>   // 1. Property A

 addTask(string)        // 2. Method A

 listAllTasks()         // 3. Method B

 deleteTask(string)     // 4. Method C

}
