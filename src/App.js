import React, { Component } from 'react';
import './App.css';
import { Provider } from './Components/Context';
import Travel from './Components/Travel.js';
import House from './Components/House.js';
import Room from './Components/Room.js';

// find five items and then reach the exit

class App extends Component {

  state = {
    message: "Starting Point",
    dirName: "north",
    dirDegree: 0,
    currentRoom: "gray",
    currentExits: ["south", "east"],
    keyRooms: [],
    keysObtained: [],
    alert: ""
  } 

  componentDidMount(){
    let tempKeyRooms = [];
     while(tempKeyRooms.length < 3 ){
      let randomIndex = Math.floor( Math.random() * House.length );
      if( !tempKeyRooms.includes(House[randomIndex].name) && House[randomIndex].name !== 'gray' && House[randomIndex].name !== 'chartreuse' ){
        tempKeyRooms.push( House[randomIndex].name );
      }
     }
     this.setState({ keyRooms: tempKeyRooms });
  }

  componentDidUpdate(prevProps, prevState){
      if( prevState.currentRoom !== this.state.currentRoom ){
        if( this.state.keyRooms.includes(this.state.currentRoom) && !this.state.keysObtained.includes(this.state.currentRoom) ){
          this.setState(prevState => ({
            keysObtained: [...prevState.keysObtained, this.state.currentRoom]
          }));
        }
      }
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
                  message: this.desc(val.exitRoom),
                  alert: ""
                });
              }
            });
        }
      });      
    }
    else{
      this.setState({ alert: 'cannot move ' + this.state.dirName });
    }
  }

  render(){
    return (
      <Provider value={this.state}>
        <div className="App">
          <header className="background">
            <h1>Maze</h1>
            <p>Find three keys then reach the end of the maze!</p>
          </header>
          <main className="background">
            <div id="playArea">
              <div>
                <Travel dirChange={ this.dirChange } moveForward={ this.moveForward } />
              </div>
              <Room />
            </div>
          </main>
        </div>
      </Provider>
    );
  }
}

export default App;
