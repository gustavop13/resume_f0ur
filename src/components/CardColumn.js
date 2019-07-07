import React from 'react';
import CardRow from './CardRow';
import { TimelineLite,} from "gsap/TweenMax";
import '../App.css';

class CardColumn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words: this.props.words,
      rot: this.props.rot
    };
    this.tween = new TimelineLite({paused: true});
    this.cardRows = [];
  }

  componentDidUpdate(prevProps) {
    if(this.props.words !== prevProps.words) {
      this.setState({words: this.props.words});
    }
    if(this.props.rot !== prevProps.rot) {
      this.setState({rot: this.props.rot});
    }
  }

  render() {
    return (
      <div className="column">
        {Array.from(this.state.words).map((l, i) => <CardRow rot={this.state.rot} key={i} ref={CardRow => this.cardRows[i] = CardRow} word={l} y={i}/>)}
      </div>
    );
  }
}

export default CardColumn;
