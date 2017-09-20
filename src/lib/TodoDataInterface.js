import Todo from './Todo';
import {findIndex} from 'lodash';

export default class TodoDataInterface {
    constructor() {
        this.todos = [];
    }

    addTodo(descriptionText) {
        const newTodo = new Todo(descriptionText);
        this.todos.push(newTodo);
        return newTodo;
    }

    archiveToggleTodo(todoId) {
        const todoIndex = findIndex(this.todos, (todo) => todo.id === todoId);
        if (todoIndex > -1) {
            this.todos[todoIndex].isDone = !this.todos[todoIndex].isDone
        }
    }

    removeTodo(todoId) {
        const todoIndex = findIndex(this.todos, (todo) => todo.id === todoId);
        if (todoIndex > -1) {
            this.todos.splice(todoIndex, 1);
        }
    }

    getAllTodos() {
        debugger;
        return this.todos.map(todo => todo);
    }
}
