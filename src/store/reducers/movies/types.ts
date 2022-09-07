export interface IMoviesState {
    movies: Array<Object>;
    pages: number,
	page: number,
	results: number,
    loading: boolean;
    error: null | string;
}

export enum MoviesActionsTypes {
    GET_MOVIES = 'GET_MOVIES',
    GET_MOVIES_SUCCESS = 'GET_MOVIES_SUCCESS',
    GET_MOVIES_ERROR = 'GET_MOVIES_ERROR'
}

export interface IMoviesResult {
    page: number,
    results: Array<Object>,
    total_results: number,
    total_pages: number,
	status_message: string
}

export interface GetMoviesRequest {
    type: MoviesActionsTypes.GET_MOVIES,
}
export interface GetMoviesRequestSucces {
    type: MoviesActionsTypes.GET_MOVIES_SUCCESS,
    movies: Array<Object>;
    pages: number,
	page: number,
	results: number,
    loading: boolean;
}
export interface GetMoviesRequestError {
    type: MoviesActionsTypes.GET_MOVIES_ERROR,
    error:string,
    loading:boolean
}

export type MoviesActions = GetMoviesRequest | GetMoviesRequestSucces | GetMoviesRequestError;