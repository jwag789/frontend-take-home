import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';

describe('NPM Package Search app', () => {
    it('renders the app', () => {
        render(<App />);
        expect(screen.getByText('NPM Package Search')).toBeInTheDocument();
    })
    it('renders the search form', () => {
        render(<App />);
        expect(screen.getByPlaceholderText('Search NPM packages')).toBeInTheDocument();
    });
})