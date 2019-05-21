import React from 'react';
import Header from './Header';
//import Buttons from './Buttons';
import ClickButton from './ClickButton';

export default class Clicker extends React.Component {
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


/*Number.prototype.round = function(decimals) {
    return Number((Math.round(this + "e" + decimals)  + "e-" + decimals));
}*/