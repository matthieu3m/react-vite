import { render, screen } from '@testing-library/react';
import Header from './Header';

test('renders header title', () => {
  render(<Header />);
  const titleElement = screen.getByText(/Titre en H1 du Header/i);
  expect(titleElement).toBeInTheDocument();
});