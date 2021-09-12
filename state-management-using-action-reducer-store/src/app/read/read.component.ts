import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { Observable } from 'rxjs';
import { Tutorial } from '../model/model';
import * as TutorialActions from '../action/action.tutorial';


@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  tutorials : Observable<Tutorial[]>

  constructor(private store : Store<AppState>) 
  {

    this.tutorials = this.store.select('tutorials');

  }

  ngOnInit(): void {


  }

  deleteTutorial(index)
  {

    this.store.dispatch(new TutorialActions.RemoveTutorial(index));

  }



}
