import { Injectable } from '@angular/core';
import { Todo } from '../todo';
import { HttpClient } from '@angular/common/http';
import { TodoComponent } from '../todo/todo.component';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {

  baseUrl = 'http://localhost:3000';
  constructor(private http: HttpClient){}

  // todoo: Todo = {};

  getTodoList() {
    return this.http.get<Todo[]>(`${this.baseUrl}/todos`);
  }

  addTodo(postData: TodoComponent) {
    return this.http.post(`${this.baseUrl}/todos`,postData);
  }

  updateTodo(id:number,postData: Todo) {
    return this.http.patch(`${this.baseUrl}/todos/${id}`, postData);
  }

  deleteTodo(id: number){
    return this.http.delete(`${this.baseUrl}/todos/${id}`);
  }

}
