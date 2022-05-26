import Movie from './Movie';

export class Cart {
  private items: Movie[] = [];

  add(item: Movie): void {
  	this.items.push(item);
  }

  show(): void {
  	console.log(this.items);
  }
}