import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TodoDataInterface from './lib/TodoDataInterface';
import TodoApp from './components/TodoApp';

require('./scss/main.scss');

const todoDataInterface = new TodoDataInterface();

const App = () => (
    <MuiThemeProvider>
        <TodoApp dataInterface={todoDataInterface}/>
    </MuiThemeProvider>
);

ReactDOM.render(
    <App/>,
    document.getElementById('app')
);