import React, { Component } from 'react';
import { Consumer } from './Context';

class Player extends Component {

    render(){
        const {
            nameChange
        } = this.props;

        return (
            <Consumer>
                { context => {
                    return (
                        <div>
                            <label>Enter Your Name:&nbsp;
                                <input onChange={ nameChange } />
                            </label>
                            <p className="capitalize">Player: { context.player }</p>
                        </div>
                    )
                } }
            </Consumer>
        );
    }
}

export default Player;