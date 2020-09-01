interface Item {
  name: string;
  url: string;
}

export interface Character {
  created: Date;
  episode: string[];
  gender: 'Male' | 'Female' | 'unknown';
  id: number;
  image: string;
  location: Item;
  name: string;
  origin: Item;
  species: string;
  status: 'Alive' | 'Dead' | 'unknown';
  type: string;
  url: string;
}