import React, { Component } from 'react';

class IframeTest extends Component {
    constructor(props) {
        super(props);
        this.state={
            vId:"https://www.youtube.com/embed/QNvlucGNLO8"
        }
    }
    render() {
        const {vId} = this.state;
        return (
            <iframe width="320" height="180" 
            src={vId}
            frameBorder="0"></iframe>
        );
    }
}

export default IframeTest;