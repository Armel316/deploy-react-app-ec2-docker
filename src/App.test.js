import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

jest.mock('axios', () => ({
  __esModule: true,
  default: {
    get: jest.fn().mockResolvedValue({
      data: [
        {
          id: 1,
          name: "John Doe",
          email: "john@test.com",
          phone: "123456"
        }
      ]
    })
  }
}));

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});