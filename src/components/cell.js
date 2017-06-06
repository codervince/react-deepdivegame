import React, { Component } from 'react';

class Cell extends React.Component {
  constructor(props){
    super(props);
    this.guess = this.guess.bind(this);
  }
  isTarget(){
    //this.props.targets
    //this.props.r
    //this.props.c
    const {targets, r, c} = this.props;
    return targets.filter(obj => {
      return obj.r === r && obj.c === c
    }).length ===1;
  }

  isSelected(){
    //is the cell correct? if so it is in both selected and targets
    const {selected, r, c} = this.props;
    return selected.filter(obj => {
      return obj.r === r && obj.c === c
    }).length ===1;

  }
  //not correct guess == selected but not in targets

  guess(){

    this.props.selectCell(this.props.r, this.props.c);
    const isCorrectGuess = this.isTarget();
    console.log(isCorrectGuess);
    console.log(this.props.r, this.props.c);
  }

  cellClassname(){
    //guess-true guess-false
    if(this.isSelected()){
        return `cell ${this.isTarget()? 'guess-true' : 'guess-false'}`;
    }
    return `cell ${this.isTarget()? 'target' : ''}`;


  }

  render(){
    console.log(this.props.selectCell);
    return (
      <div className={this.cellClassname()}
        onClick={this.guess}>
        {this.isSelected() ? '1': '0'}
       {this.props.id}

      </div>
    );
  }

  static propTypes = {
    r: React.PropTypes.number,
    c: React.PropTypes.number,
    selectCell: React.PropTypes.func
  }

}

export default Cell;
