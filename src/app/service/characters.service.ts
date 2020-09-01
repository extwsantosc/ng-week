import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Character } from '../model/character.model';
import { Response } from '../model/response.model';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {

  constructor(private readonly httpClient: HttpClient) { }

  public getAll(): Observable<Character[]> {
    return this.httpClient.get<Response<Character[]>>('https://rickandmortyapi.com/api/character/')
      .pipe(
        map(charactersResponse => charactersResponse.results
          .map(character => ({ ...character, created: new Date(character.created) })))
      );
  }

}
