import axios from 'axios';
import {API_BASE_URL} from '../Config/config';
import {LOGGEDIN_USER,PLANET_SEARCH_RESULT} from './types';


export const validateUser = (username,password) =>{   
    return (dispatch) => {        
            dispatch({ type: LOGGEDIN_USER, payload:undefined});// initial set to undefined
            return axios.get(`${API_BASE_URL}people/?search=${username}`).
            then( response => {                
                if(response.data.count === 1){
                    const data = response.data.results[0];                                                           
                    return data.name === username && data.birth_year === password? data: false
                }else{
                    return false;
                }
             }                                                        
            ).then( validUser =>{                
                dispatch({ type: LOGGEDIN_USER, payload:validUser});                 
            });
    }
}

export const getUserByName = (username) =>{   
    return (dispatch) => {                    
            return axios.get(`${API_BASE_URL}people/?search=${username}`).
            then( response => {                
                if(response.data.count === 1){
                    dispatch({ type: LOGGEDIN_USER, payload:response.data.results[0]});                    
                }else{
                    dispatch({ type: LOGGEDIN_USER, payload: false}); 
                }                                                                              
             }                                                        
            );
    }
}
export const searchPlanet = (planetName) =>{   
    return (dispatch) => {                         
            if(planetName == ''){
                dispatch({ type: PLANET_SEARCH_RESULT, payload: undefined}); 
                return;
            }            
            return axios.get(`${API_BASE_URL}planets/?search=${planetName}`).
            then( response => response.data.count > 0?response.data.results:[]                                                                          
            ).then( planets =>{                
                dispatch({ type: PLANET_SEARCH_RESULT, payload:planets});                 
            })
            .catch( error=>{
                dispatch({ type: PLANET_SEARCH_RESULT, payload:[]});      
            });
    }
}