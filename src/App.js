import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
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
        return (
            <Provider store={createStore(reducers)}>
                <LoginForm />
            </Provider>
        );
    }
}

export default App;
