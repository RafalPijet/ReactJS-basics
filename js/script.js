var Counter = React.createClass({
    propTypes: {
        descLeftButton: React.PropTypes.string.isRequired,
        descRightButton: React.PropTypes.string.isRequired,
        quantity: React.PropTypes.number.isRequired
    },

    getInitialState: function () {
        return {
            counter: 0
        };
    },

    getDefaultProps: function () {
        return {
            descLeftButton: "decrease",
            descRightButton: "increase",
            quantity: 0
        }
    },

    componentWillMount: function () {
      console.log("Before mounting component the value of counter = "
          + this.state.counter);
        this.setState({
            counter: 10
        })
    },

    componentDidMount: function ()  {
        console.log("After mounting component the value of counter = "
            + this.state.counter);
        this.setState({
            counter: this.props.quantity
        })
    },

    increment: function () {
        this.setState({
            counter: this.state.counter + 1
        })
    },

    decrement: function () {
        this.setState({
            counter: this.state.counter - 1
        })
    },

    render: function () {
        return React.createElement("div", {className: "main"},
            React.createElement("button", {onClick: this.decrement}, this.props.descLeftButton),
            React.createElement("h1", {}, "Licznik: " + this.state.counter),
            React.createElement("button", {onClick: this.increment}, this.props.descRightButton)
        );
    }
});


var element = React.createElement("ul", {},
        React.createElement(Counter, {}),
        React.createElement(Counter, {descLeftButton: "<<", descRightButton: ">>", quantity: 50}),
        React.createElement(Counter, {descLeftButton: "down", descRightButton: "up", quantity: 100})
    );

ReactDOM.render(element, document.getElementById("app"));

