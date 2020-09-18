import { Component, OnDestroy, OnInit } from '@angular/core';
import { CharactersService } from './service/characters.service';
import { Character } from './model/character.model';
import { Subscription, Observable } from 'rxjs';
import '../Chararter-Element/character-element';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(protected readonly charactersService: CharactersService) { }

  public characters$: Observable<Character[]>;

  ngOnInit(): void {
    this.characters$ = this.charactersService.getAll();
  }
}
