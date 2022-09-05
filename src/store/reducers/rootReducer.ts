import {combineReducers} from '@reduxjs/toolkit';
import moviesReducer from './movies/reducer';

const reducer = combineReducers({
	movies: moviesReducer,
});

export {reducer};
