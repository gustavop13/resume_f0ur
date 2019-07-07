import React from 'react';
import '../App.css';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      front: this.props.front,
      letter: this.props.letter,
      rot: this.props.rot
    };
  }

  componentDidUpdate(prevProps) {
    if(this.props.rot !== prevProps.rot) {
      this.setState({rot: this.props.rot});
    }
    if(this.props.letter !== prevProps.letter) {
      this.setState({letter: this.props.letter});
    }
  }

  render() {
    return (
      <div className="flip-card">
        <div className="flip-card-inner" style={{transform: `rotateY(${this.state.rot}deg)`}}>
          <div className="flip-card-front">
            <img src='back.png' alt="card"></img>
          </div>
          <div className="flip-card-back" style={{backgroundImage: `url(${this.props.front})`}}>
            <h1>{this.state.letter}</h1>
          </div>
        </div>
      </div>
    )
  }
}

export default Card;
