import React from 'react';

export default class hello extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>hello, {this.props.name}</div>
        );
    }
}