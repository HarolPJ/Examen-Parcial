import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, Text, View } from 'react-native';

export default function Menu() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Elige una opción:</Text>
      <Button title='Personajes' onPress={() => navigation.navigate('ItemsList', { type: 'people' })} />
      <Button title='Planetas' onPress={() => navigation.navigate('ItemsList', { type: 'planets' })} />
      <Button title='Vehículos' onPress={() => navigation.navigate('ItemsList', { type: 'vehicles' })} />
    </View>
  );
}
