import { useEffect } from 'react';
import { fetchPinBalls } from './services/promise-me';

export default function App() {
  useEffect(() => {
    fetchPinBalls();
  });
  return <h1>Hello World</h1>;
}
