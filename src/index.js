import React from 'react';
import { render } from 'react-dom';
import {Provider} from 'react-redux';
import Counter from './components/Counter';
import { createStore } from 'redux';


const intitialState = {
  countX:0,
  countY:0
};


function reducer (state= intitialState, action) {

  switch(action.type) {
    case 'INCREMENT_X':
      return {
        countX: state.countX + 1,
        countY: state.countY
      };
    case 'INCREMENT_Y':
      return {
        countY: state.countY + 1,
        countX: state.countX
      };
    default:
      return state;
  }
}

const store = createStore(reducer);


const App = () => (
  <Provider store={store}>
  <div>
    <Counter />
  </div>
  </Provider>
);

render(<App />, document.getElementById('root'));
