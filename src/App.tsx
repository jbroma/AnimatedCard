import React from 'react';
import {StyleSheet, View} from 'react-native';
import Card from './Card';

export default function App() {
  return (
    <View style={styles.container}>
      <Card />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'black',
    padding: 10,
    gap: 20,
  },
});
