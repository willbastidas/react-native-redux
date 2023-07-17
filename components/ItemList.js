import React from 'react';
import { FlatList, Text, ScrollView, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem } from '../reducers';
import { Styles } from '../estilos/styles';

const ItemList = () => {
  const items = useSelector(state => state.items);
  const dispatch = useDispatch();

  const handleRemove = id => {
    dispatch(removeItem(id));
  };

  return (
    <FlatList 
      data={items}
      renderItem={({ item }) => (
        <ScrollView style={Styles.containerScroll2}>
          <View>
            <Text>    nombre del producto:{item.name}{' '}</Text>
            <Text>    descricion del producto:{item.description}{' '}</Text>
            <Text>    tipo del producto:{item.tipo}{' '}</Text>
            <Text>    stock del producto:{item.stock}{' '}</Text>
          </View>
          <View style={[Styles.boton, Styles.space_up]}>
          <Text onPress={() => handleRemove(item.id)} style={Styles.textoCentrado}>Eliminar</Text>
          </View>
        </ScrollView>
      )}
      keyExtractor={item => item.id}
    />
  );
};

export default ItemList;