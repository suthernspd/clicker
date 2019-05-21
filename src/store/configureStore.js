import { createStore, combineReducers } from 'redux';
import mainReducer from '../reducers/main';
import woodReducer from '../reducers/wood';
import goldReducer from '../reducers/gold';
import foodReducer from '../reducers/food';

// Store creation

export default () => {
    const store = createStore(
        combineReducers({
            main: mainReducer,
            wood: woodReducer,
            gold: goldReducer,
            food: foodReducer,
        })
    );
    return store;
};