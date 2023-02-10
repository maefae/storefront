import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Footer from './footer';

describe('Footer', () => {
    test('renders as expected', () => {
        render(<Footer />);

        let footer = screen.getByTestId('footer');

        expect(footer).toHaveTextContent('&copy2023;Megan Seibert-Hughes');
        expect(footer).toBeInTheDocument();
    });
});