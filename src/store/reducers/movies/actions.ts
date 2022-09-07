import {
	MoviesActionsTypes,
} from './types';

export const getMoviesRequest  = (page: number) => (
	{
		type: MoviesActionsTypes.GET_MOVIES,
		page		
	}
);

export const getMoviesRequestSuccess = (movies: Object) => (
	{
		type: MoviesActionsTypes.GET_MOVIES_SUCCESS,
		data: movies
	}
);

export const getMoviesRequestFailure = (error: Object) => (
	{
		type: MoviesActionsTypes.GET_MOVIES_ERROR,
		data: error
	}
);