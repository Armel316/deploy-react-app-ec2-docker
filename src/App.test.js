import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import axios from 'axios';

// Cette ligne empêche axios de faire de vraies requêtes réseau
jest.mock('axios', () => ({
  get: jest.fn(() => Promise.resolve({ data: [] })),
  post: jest.fn(() => Promise.resolve({ data: [] }))
}));

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});