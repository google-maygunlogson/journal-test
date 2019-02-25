import React, { Component } from 'react';
import SwipeableViews from 'react-swipeable-views';
// ref for swipping :  https://react-swipeable-views.com/
class Swiper extends Component {
    constructor(props)
    {
        super(props);
        this.state = 
        {
            ready:false
        };
              
    }
    render() 
    {
        let key = 0;
        let entries = this.props.entries.map( x => { return (<div key={key++} className="page">{x.entry}</div>); });//JSON.stringify(x)
        console.log(entries);
        return (
            <div>
                <SwipeableViews>
                    <div className="page">
                    start
                    </div>
                    {entries}
                </SwipeableViews>
            </div>
        );
    }
}

export default Swiper;
