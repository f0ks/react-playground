import React from 'react';
import VisibleTodoList from './VisibleTodoList';
import RaisedButton from 'material-ui/RaisedButton';


export default class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.visibilityFilters = ["ALL_TODOS", "LEFT_TODOS", "COMPLETED_TODOS"]
        this.state = {
            todos: this.props.dataInterface.getAllTodos(),
            visibilityFilter: "ALL_TODOS"
        };
    }

    addTodo = () => {
        if (this._todoInputField.value) {
            this.props.dataInterface.addTodo(this._todoInputField.value);
            this.setState({todos: this.props.dataInterface.getAllTodos()});
            this._todoInputField.value = '';
        }
    }

    archiveToggleTodo = e => {
        this.props.dataInterface.archiveToggleTodo(e.target.dataset.id);
        this.setState({todos: this.props.dataInterface.getAllTodos()});
    }

    removeTodo = e => {
        this.props.dataInterface.removeTodo(e.target.dataset.id);
        this.setState({todos: this.props.dataInterface.getAllTodos()});
    }

    changeVisibilityFilter = e => {
        this.setState({visibilityFilter: e.target.dataset.id});
    }

    visibleTodos = () => {
        switch (this.state.visibilityFilter) {
            case "ALL_TODOS":
                return this.state.todos;
            case "LEFT_TODOS":
                return this.state.todos.filter(todo => todo.isDone === false);
            case "COMPLETED_TODOS":
                return this.state.todos.filter(todo => todo.isDone === true);
            default:
                return this.state.todos;
        }
    }

    render() {

        let visibleTodos = this.visibleTodos();

        const style = {
            margin: 12,
        };


        return (
            <div>

                <input
                    type="text"
                    placeholder="What do you want todo?"
                    ref={(c => this._todoInputField = c)}
                />
                <RaisedButton label="Add Todo" onClick={this.addTodo} style={style} primary={true} />

                <VisibleTodoList
                    visibleTodos={visibleTodos}
                    visibilityFilter={this.state.visibilityFilter}
                    archiveToggleTodo={this.archiveToggleTodo}
                    removeTodo={this.removeTodo}
                />
                <div>
                    SHOW:
                    {
                        this.visibilityFilters.map(
                            visibilityFilter =>
                                <button
                                    key={visibilityFilter}
                                    onClick={this.changeVisibilityFilter}
                                    data-id={visibilityFilter}>
                                    {visibilityFilter.replace("_", " ")}
                                </button>
                        )
                    }
                </div>


            </div>
        );
    }
}