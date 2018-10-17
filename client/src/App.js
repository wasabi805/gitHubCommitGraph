import React, { Component } from 'react';


import './assets/main.css';
import WeekGrid from './components/02-week';
import GridWrapper from './components/sub-comps/grid-wrapper';
import GridWrapperHigherOrderFunc from './components/sub-comps/grid-wrapper-2-higher-order-funcs'

import {storedGitHubApi} from './api/api'

class App extends Component {

    render(){
        return(
            <div className='Main'>
                {/*<GridWrapper id='display-months-comp' storedGitHubApi={storedGitHubApi} />*/}
                <GridWrapperHigherOrderFunc  id='display-months-comp-HOF' storedGitHubApi={storedGitHubApi}/>
                <WeekGrid storedGitHubApi={storedGitHubApi}/>
            </div>
        )
    }
}

export default App

