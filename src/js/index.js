import { Cart } from './Cart';
import Movie from './Movie';

const cart = new Cart();
const movie = new Movie(
	'Avangers', 
	2012, 
	'USA', 
	'Avengers Assemble!', 
	['фантастика', 'боевик', 'триллер'], 
	'137 мин / 02:17',
	2000
	);
const movie2 = new Movie(
	'Avangers', 
	2012, 
	'USA', 
	'Avengers Assemble!', 
	['фантастика', 'боевик', 'триллер'], 
	'137 мин / 02:17',
	1000
	);
const movie3 = new Movie(
	'Avangers', 
	2012, 
	'USA', 
	'Avengers Assemble!', 
	['фантастика', 'боевик', 'триллер'], 
	'137 мин / 02:17',
	3000
	);
cart.add(movie);
cart.add(movie3);
cart.add(movie2);
cart.show();
console.log(cart.countingWithDiscount(4));
console.log(cart.counting());