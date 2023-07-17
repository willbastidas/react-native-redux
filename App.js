import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View, AppRegistry} from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { ConfigureStoreOptions, configureStore } from '@reduxjs/toolkit';
import { Styles } from './estilos/styles';
import reducers from './src/reducers';
import { combineReducers } from '@reduxjs/toolkit';



export default function App() {
  return (
    <Provider>
       <View store={createStore(reducers)} />
    </Provider>
  );
}