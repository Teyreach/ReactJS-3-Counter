var Counter = React.createClass({
    getDefaultProps: function() {
        console.log('Display default props.');    
    },

    getInitialState: function() {
        return {
            counter: 0
        };
    },

    componentWillMount: function() {
        console.log('Render will start now.');    
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },
	
	multiply: function() {
        this.setState({
            counter: this.state.counter * 2
        });
    },
	
	divide: function() {
        this.setState({
            counter: this.state.counter / 2
        });
    },
	
	modulo: function() {
        this.setState({
            counter: this.state.counter % 4
        });
    },

    render: function() {
        return React.createElement('div', {},
            React.createElement('span', {}, 'Counter ' + this.state.counter),
            React.createElement('button', {onClick: this.increment}, 'Add '),
            React.createElement('button', {onClick: this.decrement}, 'Subtract '),
			React.createElement('button', {onClick: this.multiply}, 'Multiply '),
			React.createElement('button', {onClick: this.divide}, 'Divide'),
			React.createElement('button', {onClick: this.modulo}, 'Modulo')
        
        );
    },

    componentDidMount: function() {
        console.log('add event listener, get data');    
    },

    componentWillReceiveProps: function() {
        console.log('Display new props. Update the state based on properties');    
    },

    shouldComponentUpdate: function() {
        console.log('True/False');    
        return  true;
    },
	
	 componentWillUpdate(){
    console.log('If shouldComponentUpdate is true then it will execute');
  },

    componentDidUpdate: function() {
        console.log('Rendering done. DOM');    
    },

    componentWillUnmount: function() {
        console.log('Discard timers.');    
    },

});

var App = React.createClass({
  render: function() {
    return (
      React.createElement('div', {className: 'app'},
        React.createElement(Counter, {}),
        React.createElement(Counter, {})
      )
    );
  }
});

var element = React.createElement(App);
ReactDOM.render(element, document.getElementById('app'));