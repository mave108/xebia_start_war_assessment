import {  LOGGEDIN_USER, PLANET_SEARCH_RESULT} from '../../Actions/types';
const Userreducer = (state = {}, action) => {
    switch(action.type) {
        case LOGGEDIN_USER:
        return { ...state, loggedinUser: action.payload };  
        case PLANET_SEARCH_RESULT:                    
        return { ...state, planetSearchResult: action.payload };  
        default:
          return state;
      }
}
export default Userreducer;