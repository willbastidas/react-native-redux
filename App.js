import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import store from './store';
import AddItem from './components/AddItem';
import ItemList from './components/ItemList';
import { Styles } from './estilos/styles';

const App = () => {
  return (
    <Provider store={store} style={Styles.container}>
      <View style={Styles.container}>
        <AddItem />
        <ItemList />
      </View>
    </Provider>
  );
};

export default App;