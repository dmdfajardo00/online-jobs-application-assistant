import { render, screen } from '@testing-library/react';
import App from './App';

test('renders online jobs assistant header', () => {
  render(<App />);
  const headerElement = screen.getByText(/online jobs ai assistant/i);
  expect(headerElement).toBeInTheDocument();
});
