
import React, { Component } from 'react';

class NavigationComponents extends Component {



    render(){
       
        const { numTasks } = this.props; 
        return (
            <nav className="navbar navbar-dark bg-dark">
                <a className="navbar-brand" href="no-script-url">
                    My task
                    <span className="badge badge-pill badge-light ml-2">
                        { numTasks }
                    </span>
                </a>
            </nav>

       )     
    }


}

export default NavigationComponents;