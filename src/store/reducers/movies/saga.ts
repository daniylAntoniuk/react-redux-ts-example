import { takeLatest, put, call, select } from 'redux-saga/effects';
import { apiRequest } from '../../apiRequest';
import { URLs } from '../../urls';
import {
	MoviesActionsTypes,
	IMoviesResult,
	GetMoviesRequestSucces,
	GetMoviesRequestError
} from './types';



function* sendGetMoviesRequest (action: any) {
	try {
		// API call
		const response : IMoviesResult = yield call(apiRequest, {
			endpoint: URLs.GET_MOVIES_ENDPOINT.concat(action.page),
			method: 'GET'
		});

		if (response.results.length > 0) {
			let putData: GetMoviesRequestSucces = {
				type: MoviesActionsTypes.GET_MOVIES_SUCCESS,
				movies: response.results,
				pages: response.total_pages,
				page: response.page,
				results: response.total_results,
				loading: false
			};
			yield put(putData);
		}

		if (response.status_message) {
			let putData: GetMoviesRequestError = {
				type: MoviesActionsTypes.GET_MOVIES_ERROR,
				error: response.status_message,
				loading: false
			};
			yield put(putData);
		}

	} catch (e : any) {
		let putData: GetMoviesRequestError = {
			type: MoviesActionsTypes.GET_MOVIES_ERROR,
			error: e,
			loading: false
		};
		yield put(putData);
	}
}


export function* handler() {
	yield takeLatest(MoviesActionsTypes.GET_MOVIES, sendGetMoviesRequest);
}

