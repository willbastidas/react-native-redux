import React from 'react';
import { ScrollView, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './store';
import AddItem from './components/AddItem';
import ItemList from './components/ItemList';
import { Styles } from './estilos/styles';

{/*lo unico que hace app es mostrar la informacion de las funciones 
que estan tulizado el redux toolkit que en este caso son: 
*additem.js
*itemList.js
*reducers.js
*store.js
*/}
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