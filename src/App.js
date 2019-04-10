import React, { Component } from 'react';
import axios from "axios"
import './App.css';

class App extends Component {

  state = {
    todo: "",
    todos: []

  }

  componentDidMount() {
    axios.get("/api/start")
      .then(res => this.setState({
        todos: res.data
      }))
  }

  handleChange = (event) => {
    this.setState({
      todo: event.target.value
    })
  }

  submit = () => {
    let newTodos = [...this.state.todos]
    console.log(newTodos)
    newTodos.push(this.state.todo)
    console.log(newTodos)
    this.setState({
      todos: newTodos,
      todo: ""
    })
    axios.post("/api/new-todo", { todos: newTodos })
      .then(res => console.log(res.data))
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <h1>Todo List</h1>
        <input type="text" onChange={this.handleChange} value={this.state.todo} />
        <button onClick={this.submit}>Submit</button>
        {this.state.todos.map((todo, i) => <h3 key={i}>{todo}</h3>)}
      </div>
    );
  }
}

export default App;
