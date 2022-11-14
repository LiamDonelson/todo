import { Component } from '@angular/core';
import { ToDoList } from 'src/todolist'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasks: ToDoList[] =[
      {task : "jump", completed:false},
      {task : "cry", completed: true},
      {task : "eat", completed: false},
      {task : "drink", completed: false},
      {task : "breathe", completed: false},
      {task : "exist", completed: false}
  ];
  title = 'ToDoApp';
}



