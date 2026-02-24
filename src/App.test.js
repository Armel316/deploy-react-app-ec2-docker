import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import axios from 'axios';

jest.mock('axios');

it('renders without crashing', async () => {
  axios.get.mockResolvedValue({
    data: [
      {
        id: 1,
        name: "John Doe",
        email: "john@test.com",
        phone: "123456"
      }
    ]
  });

  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});