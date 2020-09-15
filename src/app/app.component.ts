import { Component, OnDestroy, OnInit } from '@angular/core';
import { CharactersService } from './service/characters.service';
import { Character } from './model/character.model';
import {of, Subscription, throwError} from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';
import {catchError, concatMap, finalize, take, tap} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(private readonly charactersService: CharactersService,
              private readonly spinner: NgxSpinnerService) { }

  public characters: Character[];

  private subscription: Subscription;

  ngOnInit(): void {
    this.spinner.show();
    this.charactersService.getAll().pipe(
      concatMap(() => throwError('ddd')),
      catchError(err => {
        console.error('An error occurred', err);
        return of();
      }),
      finalize(() => this.spinner.hide()),
      take(1),
    ).subscribe();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


}
