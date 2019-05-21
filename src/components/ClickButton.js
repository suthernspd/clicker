import React from 'react';
import { connect } from 'react-redux';
import { woodClickIncrement } from '../actions/wood';
import { goldClickIncrement } from '../actions/gold';
import { foodClickIncrement } from '../actions/food';

export class ClickButton extends React.Component {
    onWoodClick = () => {
        this.props.woodClickIncrement();
        console.log(this.props)
    };
    onGoldClick = () => {
        this.props.goldClickIncrement();
        console.log(this.props)
    };
    onFoodClick = () => {
        this.props.foodClickIncrement();
        console.log(this.props)
    };
    render() {
        return (
            <div>
            <button className="wood-button" onClick={this.onWoodClick}>+{this.props.wood.woodPerClick} Click{this.props.wood.woodCount > 1 ? 's' : ''}</button>
            <button className="gold-button" onClick={this.onGoldClick}>+{this.props.gold.goldPerClick} Click{this.props.gold.goldCount > 1 ? 's' : ''}</button>
            <button className="food-button" onClick={this.onFoodClick}>+{this.props.food.foodPerClick} Click{this.props.food.foodCount > 1 ? 's' : ''}</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        wood: state.wood,
        gold: state.gold,
        food: state.food
    }
};

const mapDispatchToProps = (dispatch) => ({
    woodClickIncrement: () => dispatch(woodClickIncrement()),
    goldClickIncrement: () => dispatch(goldClickIncrement()),
    foodClickIncrement: () => dispatch(foodClickIncrement())
});

export default connect(mapStateToProps, mapDispatchToProps)(ClickButton);