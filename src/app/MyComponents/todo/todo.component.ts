import { Component } from '@angular/core';
import { Todo } from 'src/app/Todos';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  todos:Todo[]=[];


  constructor(){
    this.todos=[
      {
        id:1,
        title:"Arbaaz",
        desc:"My Name"
      },      
      {
        id:2,
        title:"SomeBody",
        desc:"Stranger"
      },
      {
        id:3,
        title:"NoBody",
        desc:"No One"
      }
    ]
  }


  todoDelete(todo:Todo){
    console.log(todo);
    let findDelete= this.todos.indexOf(todo);
    this.todos.splice(findDelete,1);
  }

  handleAddTask(newTask:string){
    const todo:Todo={
      id:this.todos.length+1,
      title:newTask,
      desc:""
    };

    this.todos.push(todo);
    
  }
}
