import React from 'react';
import { connect } from 'react-redux';
import selectStats from '../selectors/clicks';
import { clickIncrement } from '../actions/clicks';

export class ClickButton extends React.Component {
    onClick = () => {
        this.props.clickIncrement();
        console.log(this.props);
    }
    render() {
        return (
            <div>
            <button className="wood-button" onClick={this.onClick}>+{this.props.stats.countInc} Click{this.props.stats.count > 1 ? 's' : ''}</button>
            <button className="gold-button" onClick={this.onClick}>+{this.props.stats.countInc} Click{this.props.stats.count > 1 ? 's' : ''}</button>
            <button className="food-button" onClick={this.onClick}>+{this.props.stats.countInc} Click{this.props.stats.count > 1 ? 's' : ''}</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        stats: selectStats(state.clicks)
    }
};

const mapDispatchToProps = (dispatch) => ({
    clickIncrement: () => dispatch(clickIncrement())
});

export default connect(mapStateToProps, mapDispatchToProps)(ClickButton);