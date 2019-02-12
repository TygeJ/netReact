const React = require('react');
const ReactDOM = require('react-dom');

const ToDoComponent = React.createClass({
  getInitialState:  function(){
    return {
      todos: ['eat', 'sleep', 'work']
    }
  },
  render: function(){
    return(
      <div id="todo-list">
        <p>todo list text</p>
        <ul>
          <li>{this.state.todos[0]}</li>
          <li>{this.state.todos[1]}</li>
          <li>{this.state.todos[2]}</li>
        </ul>
      </div>
    );
  } //render
});


ReactDOM.render(<ToDoComponent   />, document.getElementById('todo-wrapper'));
