import React from 'react';
import CardColumn from './components/CardColumn';
import Content from './components/Content';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rot: 0,
      group: 0,
      first: true,
      content: "Welcome to my site. Feel free to look around."
    };
    this.ref = React.createRef();
    this.handleClick = this.handleClick.bind(this);
    this.words = [["HTMl", "CSS", "JS", "REACT", "PHP", "NODEJS", "SQl"], ["HTML", "CSS", "JS", "NODEJS", "EJS", "", ""], ["P3", "ADOBE", "JAVA", "", "", "", ""], ["REACT", "JS", "NODEJS", "PHP", "GA", "THREE", ""]];
  }

  handleClick(e) {
    if(e.target.value === "0") {
      this.setState({content: "I'm a recent graduate from the University of Arizona. I majored in Information Science and minored in Astronomy. I focus on data analysis and web development.", group: 0});
    } else if(e.target.value === "1") {
      this.setState({content: "Ardufit is a fitness-tracking web service that uses external sensors. I wrote all the code and hosted the server on my own.", group: 1});
    } else if(e.target.value === "2") {
      this.setState({content: "Haunter's Call is a digital narrative made in Processing. It uses a GSM module to integrate call and text functionality. I handled all the code, music, and graphic design.", group: 2});
    } else if(e.target.value === "3") {
      this.setState({content: "I like using tools such as React, GSAP, and Three.js to make visually appealing sites while adhering to design fundamentals.", group: 3});
    }
    if(this.state.first) {
      this.setState({rot: this.state.rot + 180, first: false});
    } else {
      this.setState({rot: this.state.rot + 360});
    }
  }

  render() {
    return (
      <div className="App">
        <CardColumn id="col" rot={this.state.rot} words={this.words[this.state.group]}/>
        <Content id="content" handleClick={this.handleClick} content={this.state.content}/>
      </div>
    )
  }
}

export default App;
