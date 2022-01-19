import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todos = [
    {
      id: 1, 
      title: 'First Task', 
      completed: false
    },
    {
      id: 2, 
      title: 'Second Task', 
      completed: true
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  toggleTodo(todo) {
    this.todos = this.todos.map((item) => {
      if (todo.id == item.id)
        item.completed = !item.completed
      return item;
    })
  }

  deleteTodo(todo) {
    this.todos = this.todos.filter((item) => {
      return todo.id !== item.id;
    })
  }

  addTodo(todo) {
    this.todos.push(todo);
  }

}
