import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View, AppRegistry} from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { ConfigureStoreOptions, configureStore } from '@reduxjs/toolkit';
import { Styles } from './estilos/styles';
import reducers from './src/reducers';

export default function App() {
  return (
    <View style={Styles.container}>
      <Text>prueba de redux</Text>
      <StatusBar style="auto" />
    </View>
  );
}

// export const Styles = StyleSheet.create({
//   container: {
//       flex: 1,
//       backgroundColor: '#fff',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//   });
