import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { addItem } from '../reducers';
import { Styles } from '../estilos/styles';

const AddItem = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [tipo, setTipo] = useState('');
  const [stock, SetStock] = useState('')
  const dispatch = useDispatch();

  const handlePress = () => {
    dispatch(addItem({ name, description, tipo, stock }));
    setName('');
    setDescription('');
    setTipo('');
    SetStock('');
  };

  return (
    <View style={Styles.container}>
      <Text style={Styles.textoTitulo}>Agrege el producto que desee</Text>
      <TextInput style={Styles.inputGroup}
        placeholder="Nombre"
        value={name}
        onChangeText={setName}
      />
      <TextInput style={Styles.inputGroup}
        placeholder="Descripción"
        value={description}
        onChangeText={setDescription}
      />
      <TextInput style={Styles.inputGroup}
        placeholder="Tipo De producto"
        value={tipo}
        onChangeText={setTipo}
      />
      <TextInput style={Styles.inputGroup}
        placeholder="Stock Del Producto"
        value={stock}
        onChangeText={SetStock}
      />
      <Button title="Guardar" onPress={handlePress} />
    </View>
  );
};

export default AddItem;