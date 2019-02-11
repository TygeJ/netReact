var React = require('react');
var ReactDOM = require('react-dom');

var ToDo = React.createClass({
  render: function(){
    return(
      <h1>some text</h1>
    );
  }
});

ReactDOM.render(<ToDoComponent />, document.getElementById('todo-wrapper'));
