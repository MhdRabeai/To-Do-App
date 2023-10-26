import { Component } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'to-do-app';
  todos: Todo[] = [];
  newTodo: string;

  saveTodo() {
    if (this.newTodo) {
      let todo = new Todo();
      todo.name = this.newTodo;
      todo.isCompleted = true;

      if (this.todos.length <= 7) {
        this.todos.push(todo);
        this.newTodo = '';
      } else {
        alert('Array Of Todos is Full');
        this.newTodo = '';
      }
    } else {
      alert('Please , Enter a Todo !!');
    }
  }
  done(id: number) {
    this.todos[id].isCompleted = !this.todos[id].isCompleted;
  }
  remove(id: number) {
    this.todos = this.todos.filter((e, i) => i !== id);
  }
}
