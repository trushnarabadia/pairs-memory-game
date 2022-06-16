import { render, screen } from '@testing-library/react';
import App from './App';
import Cards from './components/Cards'

test('renders the app and show the game title Pairs on screen', () => {
  render(<App />);
  const linkElement = screen.getByText(/Pairs/i);
  expect(linkElement).toBeInTheDocument();
});

// test('renders the app, and checks that image with id: 1 is on the screen', () => {
//   render(<Cards />);
//   const linkElement = screen.getByAltText(/apple/i);
//   expect(linkElement).toBeInTheDocument();
// });

// I've really struggled here with testing the images. I was trying to test that there are 20 images on the page and a second test to confirm there are two of each image. 