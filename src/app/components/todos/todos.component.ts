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
      id: 1, 
      title: 'Second Task', 
      completed: true
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
