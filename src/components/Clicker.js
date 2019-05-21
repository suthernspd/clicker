import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
//import Buttons from './Buttons';
import ClickButton from './ClickButton';

export class Clicker extends React.Component {
    render() {
        const title = 'W3 Clicker';
        const subtitle = 'Work work';
        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <ClickButton />
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    clickIncrement: (countInc) => dispatch(clickIncrement(countInc)),
    buyClick: (incCost, countIncInc) => dispatch(buyClick(incCost, countIncInc)),
    sellClick: (incCost, countIncInc) => dispatch(sellClick(incCost, countIncInc)),
    reset: () => dispatch(reset())
});

Number.prototype.round = function(decimals) {
    return Number((Math.round(this + "e" + decimals)  + "e-" + decimals));
}
export default connect(undefined, mapDispatchToProps)(Clicker);