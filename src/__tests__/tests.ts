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
	'137 мин / 02:17',
	1000
	);
  cart.add(movie);
  
  const expected = [{
    name: 'Avangers',
    year: 2012,
    country: 'USA',
    slogan: 'Avengers Assemble!',
    genre: [ 'фантастика', 'боевик', 'триллер' ],
    time: '137 мин / 02:17',
    price: 1000 }
    ];

  expect(cart.show()).toEqual(expected);
});

test('testing countingWithDiscount func func', () => {
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

expect(cart.countingWithDiscount(4)).toEqual(5760);
});

test('testing counting func func', () => {
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

expect(cart.counting()).toEqual(6000);
});