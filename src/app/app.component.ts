import { Component, OnDestroy, OnInit } from '@angular/core';
import { CharactersService } from './service/characters.service';
import { Character } from './model/character.model';
import {of, throwError} from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';
import {catchError, concatMap, finalize, take, tap} from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private readonly charactersService: CharactersService,
              private readonly spinner: NgxSpinnerService) { }

  public characters$: Observable<Character[]>;

  ngOnInit(): void {
    this.spinner.hide();
    this.characters$ = this.charactersService.getAll().pipe(
      catchError(err => {
        console.error('An error occurred', err);
        return of([]);
      }),
      finalize(() => this.spinner.hide()),
    );
  }
}
