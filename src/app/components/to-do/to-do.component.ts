import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})
export class ToDoComponent implements OnInit {

  todos = [
    {
      item: 'task 1',
    },
    {
      item: 'task 2',
    },
    {
      item: 'task 3',
    },
    {
      item: 'task 4',
    },
    {
      item: 'task 5',
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  addTodo(input: HTMLInputElement){
    this.todos = [{item: input.value}, ...this.todos]
    input.value = '';
  }

  removeTodo(i:any){
    //1 told us how many elements we will remove
    this.todos.splice(i,1);
  }
}
