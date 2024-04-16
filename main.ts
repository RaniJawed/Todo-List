#! /user/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

let todolist : string [] = [];
let conditions = true;

console.log(chalk.magenta.bold("\n \t wellcome to Rani Jawed - Todo-List Application"));

//while(conditions){
  //  let addTask = await inquirer.prompt([
//   {
//        name: "task",
//        type: "input",
//        message: chalk.green("Enter your New Task:") 
//     }
 //   ]);
//todolist.push(addTask.task);
//console.log(`${addTask.task}Task added in Todo-List successfully`);
    //let addMoreTask = await inquirer.prompt([
  //     {
  //      name: "addMore",
  //      type: "confirm",
  //      message: "Do you want to add More task ?",
   //     default: "False"
  //     }
   // ]);
//conditions = addMoreTask.addmore
//}
//console.log("your updated Todo-List", todolist);          

let main = async () => {
    while(conditions){
        let option = await inquirer.prompt([
            {
                name: "choice",
                type: "list",
                message: "select an option you want to do:",
                choices: ["Add Task","Delete Task","update Task","view Todo-List","Exit"],
            }
        ]);
        if(option.choice === "Add Task"){
 
            await addTask();
        }  
        else if(option.choice === "Delete Task"){
            await deleteTask();
        }
        else if (option.choice === "update Task"){
            await updateTask()

        }
        else if(option.chioce === "View Todo-List"){
            await ViewTask();

        } else if(option.choice === "Exit"){
            conditions = false;
        }
        
        

        }
        
    }

// function to add new task to the List
let addTask = async () => {
    let newTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: "Enter your new task:"
        }
    ]);

    todolist.push(newTask.task);
    console.log(`\n ${newTask.task} task added successfully in Todo-List`);
}

// function to view all Todo-List Task

let ViewTask = () => {
    console.log("\n your Todo-List: \n");
    todolist.forEach((task,index) => {
        console.log(`${index}: ${task}`)
    })
}

//function to delete a task from the list 
let deleteTask =async () =>{
    await ViewTask()
    let taskIndex = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "Enter the 'index no.' of the task you want to delete"
        }
    ]);

    let deletedTask = todolist.splice(taskIndex.index, 1);
    console.log(`\n ${deletedTask} thiis task has been deleted successfully from your Todo-List`)
}



// function to update a task

let updateTask = async () => {
    await ViewTask()
    let update_task_index = await inquirer .prompt([
         {
           name: "index",
           type: "number",
           message: "Enter the 'index no' of the task you want to update:",
        
         },
    
         {
            name: "new_task",
            type: "input",
            message: "Now Enter new task name:",
         }
   ] );
      todolist[update_task_index.index] = update_task_index.new_task
      console.log(`\n Task at index no. ${update_task_index.index}updated to successfully [ for updated list check option "Vew Todo-List"]`)

}



main();