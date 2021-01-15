import React, { Component } from 'react';
import './App.css';
import { Provider } from './Components/Context';
import Player from './Components/Player.js';
import Travel from './Components/Travel.js';
import House from './Components/House.js';
import Room from './Components/Room.js';

class App extends Component {

  state = {
    player: "",
    message: "Starting Point",
    dirName: "north",
    dirDegree: 0,
    currentRoom: "gray",
    currentExits: ["south", "east"]
  }

  nameChange = (e) => {
    this.setState({ player: e.target.value });
  }

  dirChange = (dirHand) => {
    const compass = {
      north: 0,
      east:  90,
      south: 180,
      west:  270
    }
    
    let direction = this.state.dirDegree;
    let cardinal = "";

      switch(dirHand){

        case 'B':
          if( direction === 270 || direction === 180 ){
            direction -= 180;
          }
          else {
            direction += 180;
          }
        break;

        case 'L':
          if( direction === 0 ){
            direction = 270;
          }
          else {
            direction -= 90;
          }
        break;

        case 'R':
          if( direction === 270 ){
            direction = 0;
          }
          else{ 
            direction += 90;
          }
        break;

        default:
          // forward, do nothing
      }
    
    for (const [key, value] of Object.entries(compass)) {
      if(value === direction){
        cardinal = key;
      }
    }

    this.setState({ 
      dirDegree: direction,
      dirName: cardinal
    });
  } // END dirChange  

  exits = (r) => {
    let exitArr = [];
    House.forEach( (v,k) => {
      if(v.name === r){
          v.connections.forEach( (val, key) => {
            exitArr.push(val.exitDir);
          });
        }
    });
    return exitArr;
  }

  desc = (r) => {
    let out = "";
    House.forEach( (v,k) => {
      if(v.name === r){
        out = v.desc;
      }
    });
    return out;
  }

  moveForward = () => {
    if( this.state.currentExits.includes(this.state.dirName) ){
      House.forEach( (v,k) => {
        if(v.name === this.state.currentRoom){
            v.connections.forEach( (val, key) => {
              if( val.exitDir === this.state.dirName ){ 
                this.setState({ 
                  currentRoom: val.exitRoom,
                  currentExits: this.exits(val.exitRoom),
                  message: this.desc(val.exitRoom)
                });
              }
            });
        }
      });      
    }
    else{
      this.setState({ message: 'cannot move ' + this.state.dirName });
    }
  }

  render(){
    return (
      <Provider value={this.state}>
        <div className="App">
          <main className="background">
            <h1>Game</h1>
            <div id="playArea">
              <div>
                <Player nameChange={ this.nameChange }/>
                <Travel dirChange={ this.dirChange } moveForward={ this.moveForward } />
              </div>
              <Room 
                exits={ this.state.currentExits } 
                message={ this.state.message }              
              />
            </div>
          </main>
        </div>
      </Provider>
    );
  }
}

export default App;
