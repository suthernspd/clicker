// Clicks Reducer

const clicksReducerDefaultState = {
    count: 0,
    countInc: 1,
    countIncInc: 0.1,
    countTime: 1,
    incCost: 10,
    bonus: 1,
    calcBonus: 1,
    resets: 0,
    resetPls: false
};

export default (state = clicksReducerDefaultState, action) => {
    switch(action.type) {
        case 'CLICK_INCREMENT':
            return {
                ...state,
                count: state.count + state.countInc,
                calcBonus: (state.bonus + (state.count / 1000)).round(3)
            };
        case 'CLICK_INCOME':
            return {
                ...state,
                count: state.count + state.countTime,
                calcBonus: (state.bonus + (state.count / 1000)).round(3)
            };
        case 'BUYCLICK':
            return {
                ...state,
                count: state.count - action.incCost,
                countInc: state.countInc + action.countIncInc,
                incCost: (state.countInc + ((3*(state.countInc-1))/100)),
                calcBonus: (state.bonus + (state.count / 1000)).round(3)
            };
        case 'SELLCLICK':
            return {
                ...state,
                count: state.count + action.incCost,
                countInc: state.countInc - action.countIncInc,
                incCost: (state.countInc + ((3*(state.countInc-1))/100)),
                calcBonus: (state.bonus + (state.count / 1000)).round(3)
            };
        case 'BUYINCOME':
            return {
                ...state,
                count: state.count - action.incCost,
                countInc: state.countTime + action.countIncInc
            };
        case 'SELLINCOME':
            return {
                ...state,
                count: state.count + action.incCost,
                countInc: state.countTime - action.countIncInc
            };
        case 'RESET':
            return {
                ...state,
                count: 0,
                countInc: 1 * state.calcBonus,
                countIncInc: 0.1 * state.calcBonus,
                incCost: 10, bonus: state.calcBonus,
                calcBonus: state.calcBonus,
                resets: state.resets++,
                resetPls: false
            };
        default:
            return state;
    }
};