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
                    return (
                        <div>
                            <p className="capitalize">You Are Facing: { context.dirName }</p>
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