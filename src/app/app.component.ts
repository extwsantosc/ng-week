import { Component, OnDestroy, OnInit } from '@angular/core';
import { CharactersService } from './service/characters.service';
import { Character } from './model/character.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(private readonly charactersService: CharactersService) { }

  public isLoading: boolean;
  public characters: Character[];

  private subscription: Subscription;

  ngOnInit(): void {
    this.isLoading = true;
    this.subscription = this.charactersService.getAll().subscribe({
      next: characters => {
        this.characters = characters;
      },
      complete: () => {
        this.isLoading = false;
      },
      error: (err) => {
        console.error('An error occurred', err);
        
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


}
