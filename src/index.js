import React from 'react';
import ReactDOM from 'react-dom';

import TodoDataInterface from './lib/TodoDataInterface';
import TodoApp from './components/TodoApp';

// require('bootstrap/dist/css/bootstrap.css') ;
require('./scss/main.scss');

const todoDataInterface = new TodoDataInterface();
ReactDOM.render(
    <TodoApp dataInterface={todoDataInterface}/>,
    document.getElementById('app')
);