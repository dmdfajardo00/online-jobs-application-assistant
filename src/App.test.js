import { render, screen } from '@testing-library/react';
import App from './App';

test('renders upwork assistant header', () => {
  render(<App />);
  const headerElement = screen.getByText(/upwork ai application assistant/i);
  expect(headerElement).toBeInTheDocument();
});
