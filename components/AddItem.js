import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { addItem } from '../reducers';

const AddItem = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handlePress = () => {
    dispatch(addItem({ name, description }));
    setName('');
    setDescription('');
  };

  return (
    <View>
      <TextInput
        placeholder="Nombre"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        placeholder="Descripción"
        value={description}
        onChangeText={setDescription}
      />
      <Button title="Guardar" onPress={handlePress} />
    </View>
  );
};

export default AddItem;