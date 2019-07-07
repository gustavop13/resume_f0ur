import React from 'react';
import NavBar from './NavBar';
import pdf from '../files/resume_2.pdf';
import '../App.css';

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: this.props.content,
      group: 0
    }
  }

  componentDidUpdate(prevProps) {
    if(this.props.content !== prevProps.content) {
      this.setState({content: this.props.content});
    }
  }

  render() {
    return (
      <div className='content'>
        <NavBar handleClick={this.props.handleClick}/>
        <p>{this.state.content}</p>
        <div className='links'>
          <a href='https://github.com/gustavop13' rel='noopener noreferrer' target='_blank'>
            <img src='GHLogo.png' alt='github' className='link'></img>
          </a>
          <a href='https://www.linkedin.com/in/gustavo-placencia-carranza/' rel='noopener noreferrer' target='_blank'>
            <img src='LILogo.png' alt='linkedin' className='link'></img>
          </a>
          <a href={pdf} rel='noopener noreferrer' target='_blank'>
            <img src='res.png' alt='resume' className='link'></img>
          </a>
        </div>
      </div>
    )
  }
}

export default Content;
