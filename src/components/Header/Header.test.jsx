import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

// Mock de la fonction utilitaire
jest.mock('../../utils/env', () => ({
    getEnvVariable: jest.fn().mockReturnValue('https://example.com/api'), // Retournez la valeur que vous voulez
  }));

test('renders header title', () => {
  render(<Header />);
  const titleElement = screen.getByText(/Titre en H1 du Header/i);
  expect(titleElement).toBeInTheDocument();
});