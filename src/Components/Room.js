import React, { Component } from 'react';
import { Consumer } from './Context';

class Room extends Component {

    render(){

        return (
            <Consumer>
                { context => {
                    return (
                        <div>
                            <p><strong>Room</strong></p>
                            <p className="capitalize">Name: { context.currentRoom }</p>
                            <p className="capitalize">Exits: { context.currentExits.join(', ') }</p>
                            <p className="capitalize">Message: { context.message }</p>
                        </div>
                    )
                } }
            </Consumer>
        );
    }
}

export default Room;