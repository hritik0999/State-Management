import { Action } from '@ngrx/store';
import { Tutorial } from '../model/model';

export const ADD_TUTORIAL = 'ADD_TUTORIAL';
export const REMOVE_TUTORIAL = 'REMOVE_TUTORIAL';

export class AddTutorial implements Action
{

readonly type = ADD_TUTORIAL;

constructor(public payload ? : Tutorial){}      //make sure payload access specifier should be public otherwise it will give error --Hritik(Developer

}

export class RemoveTutorial implements Action
{

readonly type = REMOVE_TUTORIAL;

constructor(public payload ? : number){}

}

export type Actions = AddTutorial | RemoveTutorial;