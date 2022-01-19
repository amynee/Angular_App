import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {

  @Output() addTodoEvent = new EventEmitter();

  text: String = '';
  constructor() { }

  ngOnInit(): void {
  }

  addTodo() {
    this.addTodoEvent.emit({
      _id: 154,
      title: this.text,
      completed: false
    });
    this.text = '';
  }

}
