import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import Todo from '../../models/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  @Input() todo: Todo;
  @Output() toggleEvent = new EventEmitter();
  @Output() deleteEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  toggle(todo: Todo) {
    this.toggleEvent.emit(todo);
  }

  delete(todo: Todo) {
    this.deleteEvent.emit(todo);
  }

}
