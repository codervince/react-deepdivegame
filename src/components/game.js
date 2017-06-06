import React, { Component } from 'react';
import Row from "./row";
import Cell from "./cell";

//TODO: new git init create new basis for FreedomVideo grid
//TODO: new git init create new basis for VideoForm grid

class Game extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      targets:[
      {r: 0, c: 2},
      {r: 4, c: 4},
      {r: 3, c: 0}
    ],
    selected: [
      {r: 0, c: 2},
      {r: 4, c: 4},
      {r: 1, c: 0}
    ]
  };

    // setTimeout(() => this.selectCell(3,3), 3000);
  }

  selectCell(r,c){
    //concat returns a new array with the element added to the old state
    this.setState({selected: this.state.selected.concat( {r:r, c:c} )} );
  }
  render(){

    let grid = [], row;

    for(let r = 0; r < this.props.rows; r++){
      row = [];
      for(let c = 0; c < this.props.cols; c++){
          const cellId = ` r${r}-c${c}`;
          row.push(<Cell key={cellId}
            r={r} c={c}
            selectCell={this.selectCell.bind(this)}
            selected={this.state.selected}
            targets={this.state.targets} />);
      }
      grid.push(
        <Row key={r}>
        {row}
        </Row>
      );
    }

    return (
      <div>
      {grid}
      </div>
    )
  }
}

export default Game;
