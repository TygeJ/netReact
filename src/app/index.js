const React = require('react');
const ReactDOM = require('react-dom');

const ToDoComponent = React.createClass({
  render: function(){
    return(
      <div>
        <p>Car Name: {this.props.car.name}</p>
        <p>Car color: {this.props.car.color}</p>
        <p>Car engine: {this.props.car.engine}</p>
      </div>
    );
  }
});

const myCar ={name: 'Toyota', color: 'red', engine: 'v6'}

ReactDOM.render(<ToDoComponent  mssg="test 2" car={myCar} />, document.getElementById('todo-wrapper'));
