interface Info {
  count: number;
  next: string;
  pages: string;
}

export interface Response<T> {
  info: Info;
  results: T;
}
