import Movie from './Movie';

export class Cart {
  private items: Movie[] = [];

  add(item: Movie): void {
  	this.items.push(item);
  }

  show(): Movie[] {
  	console.log(this.items);
    return this.items;
  }

  countingWithDiscount(discount: number): number {
    const sum = this.items.length * 250 * (discount / 100);
    return sum;
  }

  counting(): number {
    const sum = this.items.length * 250;
    return sum;
  }
}