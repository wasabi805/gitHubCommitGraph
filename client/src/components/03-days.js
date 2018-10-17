import React from 'react';

const Days = (props)=>{
    let mapDaysArray =props.daysArray.map((week, index)=>{
        let colorCodedDays = [];
        let style={
            noPush: {backgroundColor:  '#f2f9f3',},
            lightPush : {backgroundColor:'#b1e2bb'},
            mediumPush:{backgroundColor: '#42aa57'},
            heavyPush:{backgroundColor: '#137727'},
        };

        //Get the individual days out of the days array from the github API
        let days = week.days.map((day)=>{
            return day
        });

        //COLOR IN THE DAYS
        days.forEach((num)=>{
            console.log(num);
            if(num === 0){
                colorCodedDays.push(<div className='single-day' style={style.noPush}>{num}</div>);
            }
            if(num >1 && num < 6){
                console.log('i ran');
                colorCodedDays.push(<div className='single-day' style={style.lightPush}>{num}</div>)
            }
            if(num>6 && num < 10){
                colorCodedDays.push(<div className='single-day' style={style.mediumPush}>{num}</div>)
            }
            if(num>10 && num < 20){
                colorCodedDays.push(<div className='single-day' style={style.heavyPush}>{num}</div>)
            }

        });
        console.log(colorCodedDays, 'colorCodedDays');
        // return days
        return colorCodedDays
    });

    return(
        <div className='grid-wrapper all-days-wrapper'>
            {mapDaysArray}
        </div>
    )
};

export default Days
