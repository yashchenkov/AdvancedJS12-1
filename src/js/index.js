import { Cart } from './Cart';
import Movie from './Movie';

const cart = new Cart();
const movie = new Movie(
	'Avangers', 
	2012, 
	'USA', 
	'Avengers Assemble!', 
	['фантастика', 'боевик', 'триллер'], 
	'137 мин / 02:17'
	);
cart.add(movie);
cart.show();