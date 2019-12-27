
import React, { Component } from 'react'
import './App.css';

import TODO from './components/todo';

class App extends Component {

    render(){
         return(
        <React.Fragment>
            <div className="app">
                <div className="app-container">        
                    <TODO />
                </div>
            </div>

        </React.Fragment>
         )
    }

}

export default App;

