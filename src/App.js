import React, { Component } from 'react';
import ReactDOM from "react-dom";

import logo from './logo.svg';
import Game from './components/game';

import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {gameId: 1};
  }

  resetGame(){
    this.setState({gameId: this.state.gameId+1});

  }

  render(){
    return (
      <div>
        <Game key={this.state.gameId} rows={5} cols={5}
          resetGame={this.resetGame.bind(this)}/>
      </div>
    )
  }
}


// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>
//         </div>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

export default App;
