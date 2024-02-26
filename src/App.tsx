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
    backgroundColor: 'rgb(0,0,0)',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
});
