/*
Keallan Saunders
My TODO Application
Pragma Development Project
Main.js*/

/*******Begin of CODE*****/
import React from 'react';
import AddToDo from './AddToDo';
import ToDoList from './ToDoList';

/*Adding DATA to localStorage(Refresh)*/
const todos = localStorage.getItem('todos')?
JSON.parse(localStorage.getItem('todos'))
:
[];

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: todos,
    };
  }
/*Adding Todo to list Plus Alert*/
  addToDo= (todo) => {
    if (todo.trim() === '') {
      alert("ToDo field is empty! Please add A todo");
      return;
    }
    todos.push({ todo, isCompleted: false });
    this.setState({ todos: todos });
    localStorage.setItem('todos', JSON.stringify(todos));
};
/*Changing a Todo in the List*/
changetodo = (idTodo, todo) => {const todoItem = todos[idTodo];
            todoItem.todo = todo;
            this.setState({ todos: todos });
            localStorage.setItem('todos', JSON.stringify(todos));
};
/*Marking a Todo in the list as DONE*/
doneTodo = (idTodo) => {
  const todoItem = todos[idTodo];
    todoItem.isCompleted = !todoItem.isCompleted;
    this.setState({ todos: todos });
    localStorage.setItem('todos', JSON.stringify(todos));
};
/*Removing a Todo in the List*/
removeTodo = (idTodo) => {
  todos.splice(idTodo, 1);
  this.setState({todos: todos});
  localStorage.setItem('todos', JSON.stringify(todos));
};
/*Render*/
  render() {
    return (
      <div className="main">
        <h1>My TODO Application</h1>
        <div className="bodie">
          <AddToDo addToDo={this.addToDo} />
          <br />
          <ToDoList todos={this.state.todos}
          removeTodo={this.removeTodo}
          changetodo={this.changetodo}
          doneTodo={this.doneTodo}/>
        </div>
      </div>
    );
  }
}
/*******End of CODE*****/
