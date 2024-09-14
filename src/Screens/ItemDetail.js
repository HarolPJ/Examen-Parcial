import { useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native';

export default function ItemDetail() {
  const [itemData, setItemData] = useState(null);
  const [loading, setLoading] = useState(true);
  const route = useRoute();
  const { id } = route.params;

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((json) => {
        setItemData(json);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <ActivityIndicator size='large' color='#00ff00' />;
  }

  return (
    <View style={styles.container}>
      {itemData ? (
        <View>
          <Image source={{ uri: itemData.image }} style={styles.image} />
          <Text style={styles.name}>{itemData.name}</Text>
          <Text style={styles.info}>Status: {itemData.status}</Text>
          <Text style={styles.info}>Species: {itemData.species}</Text>
          <Text style={styles.info}>Gender: {itemData.gender}</Text>
          <Text style={styles.info}>Origin: {itemData.origin.name}</Text>
        </View>
      ) : (
        <Text>No se encontraron datos</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#282c34',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#61dafb',
  },
  info: {
    fontSize: 18,
    color: '#fff',
  },
});
