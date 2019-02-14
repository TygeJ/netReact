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
        <TodoItem item={item} key={index}/>
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

// todoItem Component
const TodoItem = React.createClass({
  render: function(){
    return(
      <li>
        <div className="todo-item">
          <span className="item-name">{this.props.item}</span>
        </div>
      </li>
    );
  }
})


ReactDOM.render(<ToDoComponent />, document.getElementById('todo-wrapper'));
