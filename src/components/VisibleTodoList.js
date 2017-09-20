import React from 'react';
import SingleTodo from './SingleTodo';

export default class VisibleTodoList extends React.Component {
    render() {
        return (
            <div>
                {/*// visibilityFilter could be either of the following values:*/}
                {/*// "ALL_TODOS", "LEFT_TODOS", or "COMPLETED_TODOS"*/}
                <h3>{this.props.visibilityFilter.replace("_", " ")}</h3>
                {this.props.visibleTodos.length > 0 ?
                    (
                        <ul>
                            {this.props.visibleTodos.map(
                                (todo) =>
                                    <SingleTodo
                                        key={todo.id}
                                        todoId={todo.id}
                                        text={todo.descriptionText}
                                        isDone={todo.isDone}
                                        archiveToggleTodo={this.props.archiveToggleTodo}
                                        removeTodo={this.props.removeTodo}
                                    />
                            )}
                        </ul>
                    ) :
                    (
                        "No Todos to show"
                    )
                }
            </div>
        );
    }
}