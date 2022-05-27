import { Cart } from '../js/Cart';
import Movie from '../js/Movie';

test('testing show func', () => {
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

  expect(cart.show()).toEqual([
  	'Avangers', 
	2012, 
	'USA', 
	'Avengers Assemble!', 
	['фантастика', 'боевик', 'триллер'], 
	'137 мин / 02:17']);
});