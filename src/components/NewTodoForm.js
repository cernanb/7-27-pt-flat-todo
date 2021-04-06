import React, { Component } from "react";

export default class NewTodoForm extends Component {
  state = {
    newTodo: "",
    dueDate: "",
    assignee: "",
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const newTodoObject = {
      id: this.props.todos.length + 1,
      completed: false,
      text: this.state.newTodo,
    };

    this.props.something(newTodoObject);

    this.setState({
      newTodo: "",
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            value={this.state.newTodo}
            name="newTodo"
            type="text"
            placeholder="Enter new todo here..."
          />
          {/* <input
            onChange={this.handleChange}
            value={this.state.dueDate}
            name="dueDate"
            type="text"
            placeholder="Enter new todo here..."
          />
          <input
            onChange={this.handleChange}
            name="assignee"
            value={this.state.assignee}
            type="text"
            placeholder="Enter new todo here..."
          /> */}
          <p>{20 - this.state.newTodo.length} characters left</p>
          <button type="submit">Create New Todo</button>
        </form>
      </div>
    );
  }
}
