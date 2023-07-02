import { Component,EventEmitter,Input, Output } from '@angular/core';
import { Todo } from 'src/app/Todos';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() todo_items:Todo=new Todo();
  @Output() deleteTodo :EventEmitter<Todo> =new EventEmitter();

  handleDelete(todo_items:Todo){
    this.deleteTodo.emit(todo_items);
    console.log("Delete Call")
  }
}
