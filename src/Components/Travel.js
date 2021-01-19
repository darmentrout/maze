import React, { Component } from 'react';
import { Consumer } from './Context';

class Travel extends Component {

    render(){
        const {
            dirChange,
            moveForward
        } = this.props;

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
                            <p className="capitalize">You Are Facing: { context.dirName }</p>                            
                            <p className="capitalize">Alert: { context.alert + roomDetail }</p>
                            <div id="travelCtrl">
                                <button onClick={ () => moveForward() }>Go Forward</button>
                                <br />
                                <button onClick={ () => dirChange('L') }>Turn Left</button>
                                <button onClick={ () => dirChange('R') }>Turn Right</button>
                                <br />
                                <button onClick={ () => dirChange('B') }>Turn Backward</button>
                            </div>
                        </div>
                    )
                } }
            </Consumer>
        );
    }
}

export default Travel;