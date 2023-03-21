import './App.css';
import React, { Component } from 'react';
import imgg from './jss.jpg'

class App extends Component {

  state = {
    show: true,
    person: {
      fullName: 'AIT TAAKAT AZEDDINE',
      bio: 'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet',
      imgSrc: imgg,
      profession: 'Full Stack Web Developer',
    },
    mountedAt: new Date()
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.forceUpdate();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  handleClick = () => {
    this.setState({
      show: !this.state.show,
      mountedAt: new Date() // Update mountedAt to the current time
    });
  };

  render() {
    const { show, person, mountedAt } = this.state;
    const elapsedTime = Math.floor((new Date() - mountedAt) / 1000); // Calculate elapsed time in seconds
 
    return (
      <div>
        <button onClick={this.handleClick}>
          Show State
        </button>

        <ul style={{ display: show ? 'block' : 'none' }}>
          <li>Hello..{person.fullName}</li>
          <li>Bio : {person.bio}</li>
          <li><img src={person.imgSrc} alt ='myImage' /></li>
          <li>Profession : {person.profession}</li>
          <li>Time: {elapsedTime} </li> {/* Show elapsed time in seconds */}
        </ul>
      </div>
    );
  }
}

export default App;
