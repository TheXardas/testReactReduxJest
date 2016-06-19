import * as React from 'react';
import ReactDOM from 'react-dom';
import SelectApp from './containers/SelectApp';

import * as Redux from 'redux';
import {Provider} from 'react-redux';
import * as reducers from './reducers';

const reducer = Redux.combineReducers(reducers);
const store = Redux.createStore(reducer);


ReactDOM.render(
    <Provider store={store}>
        <SelectApp />
    </Provider>,
    document.getElementById('root')
);
