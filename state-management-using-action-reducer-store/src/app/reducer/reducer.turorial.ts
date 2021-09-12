import { Tutorial } from '../model/model';
import * as TutoralActions from '../action/action.tutorial';


export const initialState : Tutorial =
{

name : "initialState",
url : "https://google.com"

}

export function reducer(state : Tutorial[] = [initialState],action : TutoralActions.Actions)
{

switch(action.type)
{

case TutoralActions.ADD_TUTORIAL : 
return [...state,action.payload];

case TutoralActions.REMOVE_TUTORIAL : 

    state.splice(action.payload,1)
    return state;


default :
return state;

}

}