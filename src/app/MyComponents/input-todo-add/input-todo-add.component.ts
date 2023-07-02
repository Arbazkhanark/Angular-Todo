import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/Todos';

@Component({
  selector: 'app-input-todo-add',
  templateUrl: './input-todo-add.component.html',
  styleUrls: ['./input-todo-add.component.css']
})
export class InputTodoAddComponent {

  newTask:string=""
  @Output() addTask: EventEmitter<string> = new EventEmitter<string>();

  handleAdd(event: Event) {
    event.preventDefault();
    this.addTask.emit(this.newTask);
    this.newTask = "";
  }

  onChange(event:any){
    // console.log(event.target.value);
    this.newTask=event.target.value;
  }
}
