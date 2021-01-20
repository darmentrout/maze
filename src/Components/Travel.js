import React, { Component } from 'react';
import { Consumer } from './Context';

class Travel extends Component {

    render(){
        return (
            <Consumer>
                { context => {
                    let roomDetail = "";

                    if( context.keyRooms.includes(context.currentRoom) ){
                        roomDetail = " You found a key here."
                    }

                    if( context.currentRoom === 'chartreuse'){
                        if( context.keysObtained.length !== 3 ){
                            roomDetail = ` You're missing ${3 - context.keysObtained.length} keys.`;
                        }
                        else{
                            roomDetail = " You found all the keys!"
                        }
                    }

                    return (
                        <div>
                            <h2>Navigation</h2>
                            <p className="capitalize"><strong>Facing:</strong> { context.dirName }</p>   
                            <p className="capitalize"><strong>Keys:</strong> { context.keysObtained.length }</p>                         
                            <p className="capitalize"><strong>Alert:</strong> { context.alert + roomDetail }</p>
                        </div>
                    )
                } }
            </Consumer>
        );
    }
}

export default Travel;