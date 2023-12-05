import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

  // constructor(id: number, task: string, complete:boolean) {
  //   this.id = id;
  //   this.task = task;
  //   this.complete = complete;
  // }

  id?: number;
  task: string = '';
  complete: boolean = false;
  

}
