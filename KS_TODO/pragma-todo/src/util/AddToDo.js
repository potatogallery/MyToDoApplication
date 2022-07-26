/*
Keallan Saunders
My TODO Application
Pragma Development Project
AddToDo.js*/

/*******Begin of CODE*****/
import React, { Component } from 'react'

export default class AddToDo extends Component{

  constructor(props) {
      super(props);
      this.state = {
        todo: '',
      };
    }

    handleChange = (action) => {this.setState({ todo: action.target.value });
  };
    handleSubmit = (action) => {action.preventDefault();
                                this.props.addToDo(this.state.todo);
                                this.setState({ task: '' });
  };

  /*Render Adding a Todo From field to list*/
  render() {
    return(
    <form class="adding" onSubmit={this.handleSubmit}>
    <input
          type="text"
          placeholder="Add To Do Item"
          value={this.state.todo}
          onChange={this.handleChange}
          autoFocus
        />
    <button class="add" type="submit">
          Add
    </button>
  </form>);}
}
/*******End of CODE*****/
