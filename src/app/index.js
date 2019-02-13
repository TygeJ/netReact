const React = require('react');
const ReactDOM = require('react-dom');

const ToDoComponent = React.createClass({
  getInitialState:  function(){
    return {
      todos: ['eat', 'sleep', 'work'],
    }
  },
  render: function(){
    let todos = this.state.todos;
    todos = todos.map(function(item, index){
      return(
        <li>{item}</li>
      );
    });
    return(
      <div id="todo-list">
        <p>text 1</p>
        <ul>{todos}</ul>
      </div>
    )
  }
});


ReactDOM.render(<ToDoComponent />, document.getElementById('todo-wrapper'));
