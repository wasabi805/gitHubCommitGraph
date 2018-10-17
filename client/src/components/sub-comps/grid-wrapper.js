import React, {Component}from 'react';
class GridWrapper extends Component{
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
        console.log(getMonth, 'getMonth');
        let printMonths = [];
        let current = '';
        for (let i = 0; i < getMonth.length; i++) {
            if (getMonth[i] !== current) {
                printMonths.push(getMonth[i]);
                current = getMonth[i];
            }
            if (getMonth[i] === current) {
                printMonths.push("");
            }
        }
        console.log(printMonths, 'wutang');
        this.setState({
            printMonths : printMonths
        })
    }
    render() {
        console.log(this.state.printMonths, 'BooYa!');

        let displayMonths = this.state.printMonths.map((month, index)=>{
            let style = {fontSize: '7px', padding: '0', marginLeft:'13px'};
            let months = [];
            let m = <div key={index} className='col display-month' style={style}><p>{month}</p></div>;
            months.push(m);
            return months
        });

        return (
            <div className='container'>
                <div className='grid-wrapper'>
                    {displayMonths}
                    {/*{getMonth}*/}
                </div>
            </div>

        )
    }
};

export default GridWrapper