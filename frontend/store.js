import {createStore, applyMiddleware} from 'redux';
import {logger} from 'redux-logger';


export default function configureStore() {
  return createStore( () =>
    ({}),
    applyMiddleware(logger)
  );
}
