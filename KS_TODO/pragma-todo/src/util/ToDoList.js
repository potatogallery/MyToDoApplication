/*
Keallan Saunders
My TODO Application
Pragma Development Project
ToDoList.js*/

/*******Begin of CODE*****/
import React, { Component } from 'react'
import TodoItem from './TodoItem';

export default class ToDoList extends Component{
  /*Table with actions for Remove,Changing and marking DONE*/
  render(){
    return (
    <table>
    <thead>
    <tr>
    <th>ToDos</th>
    <th>Options</th>
    </tr>
    </thead>
    <tbody>
    {this.props.todos.map((todo, index) => (
      <TodoItem key={index} todoItem={todo} id={index}
      removeTodo={this.props.removeTodo}
      changetodo={this.props.changetodo}
      doneTodo={this.props.doneTodo}/>
    ))}
    </tbody>
    </table>
  );
  }
}
/*******End of CODE*****/
