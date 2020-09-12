import {async, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {CharactersService} from './service/characters.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('AppComponent', () => {
  let charactersService: CharactersService;
  let compoenent: AppComponent;
  let fixture;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [AppComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    compoenent = fixture.componentInstance;
    charactersService = TestBed.inject(CharactersService);
  }));

  it('ngOnInit => Iniciliza el compoenente', () => {
    // Arrange
    const spyGetAll = spyOn(charactersService, 'getAll');
    // Act
    fixture.detectChanges();
    // Assert
    expect(spyGetAll).toHaveBeenCalled();
  });

});
