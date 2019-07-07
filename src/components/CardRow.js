import React from 'react';
import Card from './Card';
import '../App.css';

class CardRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      word: this.props.word,
      rot: this.props.rot
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.props.rot !== prevProps.rot) {
      this.setState({rot: this.props.rot});
    }
    if(this.props.word !== prevProps.word) {
      this.setState({word: this.props.word});
    }
  }

  render() {
    return (
      <div className="cardRow">
      {Array.from(this.state.word).map((l, i) => <Card key={i} rot={this.state.rot} front={"front" + (Math.floor(Math.random() * 4) + 1) + ".png"} letter={l}/>)}
      </div>
    );
  }
}

export default CardRow;
