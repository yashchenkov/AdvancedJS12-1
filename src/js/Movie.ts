import MovieFilm from './MovieFilm';

export default class Movie implements MovieFilm {
  constructor(
	readonly name: string,
	readonly year: number,
	readonly country: string,
	readonly slogan: string,
	readonly genre: String[],
	readonly time: string
	) { }
}
