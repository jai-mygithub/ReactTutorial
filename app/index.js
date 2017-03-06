var React = require('react');
var ReactDOM = require('react-dom');

var FriendsContainer = React.createClass({
  render: function () {
    var name = 'Jai Tiwari';
    var friends = ['Yousuf', 'Ishan', 'Haider'];
    return (
      <div>
        <h3>
          Name: {name}
        </h3>
        <ShowList names={friends} />
      </div>
    )
  }
});

var ShowList = React.createClass({
  render: function () {
    var listItems = this.props.names.map(function (friend) {
      return <li>{friend}</li>
    });
    return (
      <div>
        <ul>
          {listItems}
        </ul>
      </div>
    )
  }
});

ReactDOM.render(<FriendsContainer/>, document.getElementById('app'))