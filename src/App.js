import React, { Component } from "react";
import TodoListItem from "./components/TodoListItem";
import NewTodoForm from "./components/NewTodoForm";
import Header from "./components/Header";
class App extends React.Component {
  state = {
    todos: [
      { id: 1, text: "Call Mom", completed: false },
      { id: 2, text: "Watch Lecture Recording", completed: true },
    ],
  };

  addNewTodo = (newTodoObject) => {
    // Here is where we would make an api call to persist the new todo object
    // fetch(`localhost:3001/todos`, {
    //   method: 'POST',
    //   body: JSON.stringify(newTodoObject)
    // })
    // .then(res => res.json())
    // .then(data => {
    //   const newTodosState = this.state.todos.concat(data);
    //   this.setState({
    //     todos: newTodosState,
    //   });
    // })

    const newTodosState = this.state.todos.concat(newTodoObject);
    this.setState({
      todos: newTodosState,
    });
  };

  render() {
    const todoElements = this.state.todos.map((todo) => (
      <TodoListItem key={todo.id} todo={todo} />
    ));
    return (
      <div>
        <Header todos={this.state.todos} />
        <NewTodoForm todos={this.state.todos} something={this.addNewTodo} />
        {todoElements}
      </div>
    );
  }
}

export default App;
