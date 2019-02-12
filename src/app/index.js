var React = require('react');
var ReactDOM = require('react-dom');

var ToDoComponent = React.createClass({
  render: function(){
    return(
      <h1>test</h1>
    );
  }
});

ReactDOM.render(<ToDoComponent />, document.getElementById('todo-wrapper'));
