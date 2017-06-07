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

  canBeClicked(){
    return this.props.isRecallPhase || this.isSelected();
  }
  //not correct guess == selected but not in targets

  guess(){

    if (this.canBeClicked()){
      this.props.selectCell(this.props.r, this.props.c);
    }
    //else do nothing\
    console.log(this.props.r, this.props.c);
  }

  cellClassname(){
    let className = "cell";
    const isTarget = this.isTarget(),
      isSelected = this.isSelected();

    if (isTarget){
      if(this.props.gameState === 'challenge'){
        //show blue squares else hide
        className += ' target';
      }
      if(isSelected){
        className += ' guess-true';
      }
    } else {
      //not selected
      console.log(isSelected);
      //not target but sleected = false
      if (isSelected){
          className += ' guess-false';
      }
    }
    return className;
  }

  render(){
    console.log(this.props.selectCell);
    return (
      <div className={this.cellClassname()}
        onClick={this.guess}>

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
