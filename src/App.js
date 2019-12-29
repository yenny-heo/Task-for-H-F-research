import React from 'react';
import './App.css';
import NavBar from './NavBar.js';
import Main from './Main.js';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <header className="NavBar">
          <NavBar></NavBar>
        </header>
        <div className="Main">
          <Main></Main>
        </div>
      </div>
    );
  }
}

export default App;
