import { createStore, combineReducers } from 'redux';
import clicksReducer from '../reducers/clicks';

// Store creation

export default () => {
    const store = createStore(
        combineReducers({
            clicks: clicksReducer
        })
    );
    return store;
};