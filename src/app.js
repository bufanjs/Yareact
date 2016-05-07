import React from 'react';
import ReactDOM from 'react-dom';
import Hello from 'mycommon/hello'
import './app.less';

class App extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="index-app">
                <h1>sss ss</h1>
                <Hello/>
            </div>
        );
    }
}
ReactDOM.render(<App />, document.getElementById('Ya-app'));
