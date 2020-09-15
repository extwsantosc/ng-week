import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character } from '../model/character.model';
import { Response } from '../model/response.model';
import {delay, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {

  constructor(private readonly httpClient: HttpClient) { }

  public getAll(): Observable<Character[]> {
    return this.httpClient.get<Response<Character[]>>('https://rickandmortyapi.com/api/character/').pipe(
      delay(2000),
      map(response => response.results
        .map(character => ({ ...character, created: new Date(character.created) })))
    );
  }

}
