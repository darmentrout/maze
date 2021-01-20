import React, { Component } from 'react';
import { Consumer } from './Context';

class Room extends Component { 
    render(){
        return (
            <Consumer>
                { context => {

                    let resetButton;
                    if(context.keysObtained.length === 3 && context.currentRoom === 'chartreuse'){
                        resetButton = <p><button onClick={ () => window.location = window.location.href}>Reset</button></p>;
                    }

                    return (
                        <div>
                            <h2>Room</h2>
                            <p className="capitalize square-container"><strong>Name:</strong>&nbsp;
                                <span className="square" style={{backgroundColor: context.currentRoom}}>&nbsp;</span>
                                &nbsp;{ context.currentRoom }
                            </p>
                            <p className="capitalize"><strong>Exits:</strong> { context.currentExits.join(', ') }</p>
                            <p className="capitalize"><strong>Description:</strong> { context.message }</p>
                            { resetButton }
                        </div>
                    )
                } }
            </Consumer>
        );
    }
}

export default Room;