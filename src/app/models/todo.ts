class oldTodo {
    id: String;
    title: String;
    completed: boolean;

    constructor(id: String, title: String, completed: boolean) {
        this.id = id;
        this.title = title;
        this.completed = completed;
    }
}

export default class Todo {
    constructor(public id: String, public title: String, public completed: boolean) {}
}