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
    let sum = 0;
    this.items.forEach(elem => {
      sum += elem.price * (1 - (discount / 100));
    });
    return sum;
  }

  counting(): number {
    let sum = 0;
    this.items.forEach(elem => {
      sum += elem.price;
    });
    return sum;
  }
}