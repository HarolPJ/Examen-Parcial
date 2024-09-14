import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function Home() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido a la API de Rick and Morty</Text>
      <Button title='Explorar personajes' onPress={() => navigation.navigate('ItemsList')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#282c34',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#61dafb',
    marginBottom: 20,
    textAlign: 'center',
  },
});
