import { Component, OnInit, Input } from '@angular/core';
import { Character } from '../model/character.model';

@Component({
  selector: 'app-rick-morty',
  templateUrl: './rick-morty.component.html',
})
export class RickMortyComponent implements OnInit {
  @Input() character: Character;
  constructor() { }

  ngOnInit(): void {
  }

}
