import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';

class App extends Component {
    componentWillMount(){
        const config = {
            apiKey: 'AIzaSyAiEGJMAs315ftmqen5aw7UiSOUIuRIyMA',
            authDomain: 'manager-31d68.firebaseapp.com',
            databaseURL: 'https://manager-31d68.firebaseio.com',
            projectId: 'manager-31d68',
            storageBucket: 'manager-31d68.appspot.com',
            messagingSenderId: '734523790657'
          };
          firebase.initializeApp(config);
    }
    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store}>
                <LoginForm />
            </Provider>
        );
    }
}

export default App;
