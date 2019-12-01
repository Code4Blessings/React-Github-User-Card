import React, { Component } from 'react';
import UserInfo from './components/UserInfo';
import './App.css';
import FollowerList from './components/FollowerList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      
    }
  }
  render () {
    return (
      <div className="App">
        <div className="header">
          <h1>React <span role="img" aria-label="heart">💗's</span>  Github</h1>
        </div>
        <UserInfo />
        <FollowerList />
      </div>
    );
  }
}

export default App;
