import {call, select} from 'redux-saga/effects';
import { URLs } from './urls';
import axios, {AxiosResponse, AxiosRequestHeaders} from 'axios';

export interface IFetchOptions {
    endpoint: string,
    method:string,
    headers: AxiosRequestHeaders,
    body: any
}

const makeRequest = async({ endpoint, method, headers, body = null} : IFetchOptions ) => {
	const response = await axios.request({		
		url:URLs.BASE_URL + endpoint, 
		method,
		headers,				
        data:body
	});
	return response;
};


function* apiRequest({ endpoint, method, body = null } : any) {
    //  FOR USER AUTHORIZATION
    //const state = yield select();

    const JWT = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MjhlY2U0Mjc3YjhlZTAxMGJkMDMwZDEzMmI4MDU0ZSIsInN1YiI6IjVlMDRjYTdiZDFhODkzMDAxOTk0OGE4MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UcAcn8Bx7Obm_iQ2btMGRRv-8eRV6gij9vpbAvLfbpM";

    const response : AxiosResponse = yield call(makeRequest, {		
		endpoint,
		method,
		headers: {     
            //  FOR USER AUTHORIZATION       
			//Authorization: state.user.authToken ? `Bearer ${ state.user.authToken }` : null,
            //  TEST JWT FOR TEST API
            Authorization: `Bearer ${ JWT }`,
			Accept: 'application/json',
			'Content-Type': 'application/json'
		},
		body: body !== null ? JSON.stringify({ ...body }) : body
	});

	// if (response.status === 401) {
    //      log the user out or reresh token
	// }

	if (response.status == 400 || response.status == 401) {
		// handle bad response
		console.error(response);
		throw new Error('not ok api request in apiRequest func');
	}
	return response.data;
}

export {apiRequest};
