import {combineReducers} from 'redux';
import { useReducer } from './useReducer';

const rootReducer = combineReducers({
    user: useReducer,
});

export default rootReducer