import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { todos } from './data/task.json';
import NavigationComponents from './components/NavigationComponent';
import TaskComponent from './components/TaskComponent';
import FormTaskComponent from './components/FormTaskComponent';


class App extends Component {
  
  constructor(props) {
    super(props); 
    this.state = {
      todos: todos
    } 

    this.handleAddTodo = this.handleAddTodo.bind(this);
  }


  handleAddTodo(todo){
    this.setState({
      todos: [...this.state.todos, todo]
    })
  }

  handleRemoveTodo(index){
    console.log(index);

    if(window.confirm('Are you sure that you want to remove it?')){
      this.setState({
        todos: this.state.todos.filter((todo, i) => {
            return i !== index;
        })
      })
    }
  }


  render(){
    const tasks = this.state.todos.map((todo, key) => {
      todo.id = key;
      return (
          <TaskComponent key={ key }  todo={ todo } onRemove={this.handleRemoveTodo.bind(this, todo.id)} />
      )
    })

    return (
      <div className="App">
        <NavigationComponents numTasks={this.state.todos.length} />

        <div className="container">
          <div className="row mt-4">
              <div className="col-md-4 text-center">
                <img src={logo} className="App-logo  " alt="logo" />
                <FormTaskComponent onAdd={ this.handleAddTodo } />
              </div>
              <div className="col-md-8">
                <div className="row">
                    { tasks }
                </div>
              </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
