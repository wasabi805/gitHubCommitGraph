import React, {Component}from 'react';
class GridWrapperHigherOrderFunc extends Component{
    constructor(props){
        super(props);
        this.state={
            printMonths: [],
        }
    }
    componentWillMount() {
        console.log(this.props);
        let getMonth = this.props.storedGitHubApi.map((epoch) => {

            const monthNames = ["Jan", "Feb", "Mar", "April", "May", "Jun",
                "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"
            ];

            let d = {};
            d.entireDate = new Date(epoch.week * 1000);
            d.month = d.entireDate.getMonth();
            d.justTheMonth = monthNames[d.month]; // https://stackoverflow.com/a/1643468/7857134 : convert num 1-12 into a date in string

            return d.justTheMonth
        });

        //Using forEach() && ternary
        let printMonths = [];
        let current = '';
        getMonth.forEach((month)=>{
            (month === current) ?  printMonths.push("") : printMonths.push(month) ; current = month
        } );
        console.log(printMonths, 'with ternary');
        this.setState({
            printMonths : printMonths
        })
    }
    render() {
        console.log(this.state.printMonths, 'BooYa!');
        let displayMonths = this.state.printMonths.map((month, index)=>{
            let style = {fontSize: '10px', padding: '0',  width: '1em', textAlign: 'center'};
            let months = [];
            let m = <div key={index} className='col display-month' style={style}><p className='pl-2 pr-2'>{month}</p></div>;
            months.push(m);
            return months
        });

        return (
            <React.Fragment>
               <div className='header-wrapper'>
                   <h3>My Bootleg gitHub commit chart</h3>
               </div>

                <div className='container pt-5'>
                    <div className='grid-wrapper'>
                        {displayMonths}
                    </div>
                </div>
            </React.Fragment>

        )
    }
};

export default GridWrapperHigherOrderFunc