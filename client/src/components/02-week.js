import React from 'react';
import Days from './03-days'

const Week = (props)=>{

    return(
         <div className=' container week-grid-wrapper'>
             <Days daysArray={props.storedGitHubApi}/>
         </div>
    )
};

export default Week