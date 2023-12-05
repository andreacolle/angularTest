import { Component, OnInit, ViewChild } from '@angular/core';
import { Todo } from './todo';
import { CheckboxChangeEvent } from 'primeng/checkbox';
import { TodoServiceService } from './services/todo-service.service';
import { TodoComponent } from './todo/todo.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @ViewChild('todoTask') todoTask: any;

  constructor(private todoService: TodoServiceService) { }

  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.todoService.getTodoList().subscribe(
      response => {
        this.todos = response
      }
    )
  }

  task = '';
  todos: TodoComponent[] = [];

  checked = false;

  updateTodo(e: CheckboxChangeEvent, todo: TodoComponent) {

    // console.log(e, todo);
    let todoId: number = todo.id;
    this.todoService.updateTodo(todoId, todo).subscribe(
      response => {
        console.log(response);
        this.getList();
      });
  }

  deleteTodo(todoId: number) {
    console.log(todoId)
    this.todoService.deleteTodo(todoId).subscribe(
      response => {
        console.log(response);
        this.getList();
      }
    )
  }

  addTodo(task: String) {
    const todo = new TodoComponent;
    todo.task = this.task;
    this.todoService.addTodo(todo).subscribe(
      response => {
        console.log(response);
        // * this.task = '' va bene uguale. Ma faremo un reset un po' più fico con il .reset / viewChild
        // this.task = '';
        this.todoTask.reset();
        this.getList();
      }
    );

  }
}
