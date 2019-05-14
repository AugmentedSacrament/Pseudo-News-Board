import React from 'react';
import {Provider} from 'react-redux';
import Posts from '../components/Posts';
import Postform from '../components/Postform';
import store from '../store/store';

import '../css/app.css';
function App() {
  return (
    <Provider store={store}>
      <div className="App wrapper">
        <h1>Pseudo News Board</h1>
        <p>add a new message using the form below</p>
        <Postform/>
        <Posts/>
      </div>
    </Provider>
  );
}

export default App;
