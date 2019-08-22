import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Todo } from '@myorg/data';

@Component({
    selector: 'myorg-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    todos: Todo[] = [];

    constructor(private http: HttpClient) {
        this.fetch();
    }

    fetch() {
        this.http.get<Todo[]>('/api/todos').subscribe(t => (this.todos = t));
    }

    addTodo() {
        this.http.post('/api/todos', {}).subscribe(() => {
            this.fetch();
        });
    }
}
