
import {SOME_ACTION} from '../actions/00-action-types'

const initialState={
    someObj : {}
};

export default (state= initialState, action)=>{
    switch(action.type){

        case SOME_ACTION:
            return{
                ...state
            };

        default:
            return state
    }
};