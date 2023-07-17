import React from 'react';
import { ScrollView, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './store';
import AddItem from './components/AddItem';
import ItemList from './components/ItemList';
import { Styles } from './estilos/styles';

const App = () => {
  return (
    <Provider store={store}>
      <ScrollView style={Styles.containerScroll}>
        <AddItem />
        <ItemList />
      </ScrollView>
    </Provider>
  );
};

export default App;