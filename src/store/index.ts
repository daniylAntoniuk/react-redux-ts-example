import {applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {reducer} from './reducers/rootReducer';
import {handler as moviesSaga} from './reducers/movies/saga';
import { configureStore } from '@reduxjs/toolkit';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
        reducer,   
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
        devTools: process.env.NODE_ENV !== 'production'});
        
export type RootState = ReturnType<typeof store.getState>

sagaMiddleware.run(moviesSaga);

