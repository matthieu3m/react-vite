import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Header from './Header';

// Mock de la fonction utilitaire
jest.mock('../../utils/env', () => ({
    getEnvVariable: jest.fn().mockReturnValue('https://example.com/api'),
}));

test('renders header title and modifies it on button click', () => {
    render(<Header title="Titre en H1 du Header" />);

    // Vérifier que le titre est présent
    const titleElement = screen.getByText(/Titre en H1 du Header/i);
    expect(titleElement).toBeInTheDocument();

    // Vérifier que le bouton modifie le titre
    const buttonElement = screen.getByRole('button', { name: /Modifier le Titre/i });
    fireEvent.click(buttonElement);

    const modifiedTitleElement = screen.getByText(/Titre modifié après clic/i);
    expect(modifiedTitleElement).toBeInTheDocument();
});
