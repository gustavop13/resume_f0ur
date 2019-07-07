import React from 'react';
import '../App.css';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: "",
      group: 0
    };
  }

  render() {
    return (
      <div className="NavBar">
        <button onClick={this.props.handleClick} value="0">About</button>
        <button onClick={this.props.handleClick} value="1">Ardufit</button>
        <button onClick={this.props.handleClick} value="2">Haunter's Call</button>
        <button onClick={this.props.handleClick} value="3">Web</button>
      </div>
    )
  }
}

export default NavBar;
