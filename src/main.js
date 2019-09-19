import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import MainLayout from './components/mainLayout';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const store = configureStore();

render(
    <Provider store={store}>
      <Router>
        <MainLayout />
      </Router>
    </Provider>,
    document.getElementById('root')
);

export default store;
