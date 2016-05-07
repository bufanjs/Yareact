import React from 'react';
import ReactDOM from 'react-dom';
import './app.less';

class App extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="index-app">
                <h1>Hello world!</h1>
            </div>
        );
    }
}
ReactDOM.render(<App />, document.getElementById('Ya-app'));
