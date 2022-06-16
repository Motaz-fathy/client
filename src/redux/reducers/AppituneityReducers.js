import {LOADDING_DATA , SUCCESS_DATA , ERROR_DATA} from '../action/type'

export const AppituneityReducers = (state = {appits :[]} , action) => {

    switch (action.type) {
        case LOADDING_DATA: return {loadding : true  } ;
        case SUCCESS_DATA: return {loadding : false  , appits  :  action.payload.appits } ;
        case ERROR_DATA: return {loadding : false    ,  error  :  action.payload} ;
        default:
            return {state}
    }
  
}
