import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTodoAddComponent } from './input-todo-add.component';

describe('InputTodoAddComponent', () => {
  let component: InputTodoAddComponent;
  let fixture: ComponentFixture<InputTodoAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputTodoAddComponent]
    });
    fixture = TestBed.createComponent(InputTodoAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
