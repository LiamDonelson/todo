import { Component, Input,OnInit } from '@angular/core';
import { ToDoList} from 'src/todolist';


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  @Input() existingTasks: ToDoList[] = [];

  //This newItem variable should be editable directly in our HTML 
  newTask:ToDoList = {task:"",completed:false};
  taskName: string = ""; 

  constructor() { }

  ngOnInit(): void {
  }


  addTask(){
    this.newTask.task = (<HTMLInputElement> document.getElementById("Task")).value;

    console.log(this.newTask);
    
    this.existingTasks.push(this.newTask);
  }

}
