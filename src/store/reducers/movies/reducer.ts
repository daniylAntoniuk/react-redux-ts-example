import {
	MoviesActionsTypes,
    IMoviesState,
    MoviesActions
} from './types';

const initialState : IMoviesState = {
	movies: [],
	page:0,
	pages: 0,
	results: 0,
	error: null,
    loading: false
};

const moviesReducer = (state: IMoviesState = initialState, action: MoviesActions) => {
	switch (action.type) {
		case MoviesActionsTypes.GET_MOVIES: {
			return {
				...state,
				loading: true
			};
		}
		case MoviesActionsTypes.GET_MOVIES_SUCCESS: {
			const { results, loading, page,pages, movies} = action;
			return {
				...state,
				results, loading, page,pages, movies
			};
		}
		
		case MoviesActionsTypes.GET_MOVIES_ERROR: {
			const { error, loading } = action;
			return {
				...state,
				error,
				loading
			};
		}		
		default:
			return state;
	}
};

export default moviesReducer;
