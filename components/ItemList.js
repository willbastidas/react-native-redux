import React from 'react';
import { FlatList, Text } from 'react-native';
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
        <Text>
          {item.name} - {item.description} - {item.tipo} - {item.stock}{' '}
          <Text onPress={() => handleRemove(item.id)} style={Styles.boton}>Eliminar</Text>
        </Text>
      )}
      keyExtractor={item => item.id}
    />
  );
};

export default ItemList;