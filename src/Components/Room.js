import React, { Component } from 'react';
import { Consumer } from './Context';

class Room extends Component { 
    render(){
        return (
            <Consumer>
                { context => {
                    return (
                        <div>
                            <h2>Room</h2>
                            <p className="capitalize square-container">Name:&nbsp;
                                <span className="square" style={{backgroundColor: context.currentRoom}}>&nbsp;</span>&nbsp;
                                { context.currentRoom }
                            </p>
                            <p className="capitalize">Keys: { context.keysObtained.length }</p>
                            <p className="capitalize">Exits: { context.currentExits.join(', ') }</p>
                            <p className="capitalize">Description: { context.message }</p>
                        </div>
                    )
                } }
            </Consumer>
        );
    }
}

export default Room;