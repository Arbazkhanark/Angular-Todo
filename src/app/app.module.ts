import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './MyComponents/todo/todo.component';
import { TodoItemComponent } from './MyComponents/todo-item/todo-item.component';
import { InputTodoAddComponent } from './MyComponents/input-todo-add/input-todo-add.component';
import { AboutComponent } from './MyComponents/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoItemComponent,
    InputTodoAddComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
