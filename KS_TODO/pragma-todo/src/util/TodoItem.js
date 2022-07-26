/*
Keallan Saunders
My TODO Application
Pragma Development Project
TodoItem.js*/

/*******Begin of CODE*****/
import React, { Component } from 'react'

export default class TodoItem extends Component {

  constructor(props)
  {
    super(props);
    this.state = {todo: this.props.todoItem.todo,nowEditing: false,};
  }
/*Edit todo item*/
Editingnow = (nowEditing) => {this.setState({ nowEditing: nowEditing });
    };
handleChange = (event) => {this.setState({ todo: event.target.value });
    };
/*Remove todo Item*/
removeTodo = () => {
  this.props.removeTodo(this.props.id);
    };
handleSubmit = (event) => {event.preventDefault();
    this.props.changetodo(this.props.id, this.state.todo);
    this.setState({ nowEditing: false });
    };
/*Mark todo item as DONE*/
doneTodo = () => {this.props.doneTodo(this.props.id);
    };

/*Render*/
  render(){
    return (
      <tr>
      {this.state.nowEditing ? (
          <>
              <td><form onSubmit={this.handleSubmit}>
              <input value={this.state.todo} onChange={this.handleChange} autoFocus />
              </form>
              </td>
              <td>
              <button
              class="save"
              type="submit"
              onClick={this.handleSubmit}>Save</button>
              <button
              class="cancel"
              type="button"
              onClick={()=>this.Editingnow(false)}>Cancel</button>
              </td>
              </>
            )
            :
            (
          <>
              <td onClick={this.doneTodo} className="hand">
              <input class="rad1" type="radio" readOnly checked={this.props.todoItem.isCompleted}/>
              <span className={this.props.todoItem.isCompleted?'Done':'notDone'}>{this.props.todoItem.todo}</span>
              </td>
              <td>
              <button class="edit" onClick={() => this.Editingnow(true)}>Edit</button>
              <button class="delete" onClick={this.removeTodo}>Delete</button>
              </td>
         </>
    )}
    </tr>
    )
  }
}
/*******End of CODE*****/
