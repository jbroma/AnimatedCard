import React from 'react';
import {View} from 'react-native';

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        gap: 20,
      }}>
      <View style={{width: 200, height: 100, backgroundColor: 'red'}} />
      <View style={{width: 200, height: 100, backgroundColor: 'green'}} />
      <View style={{width: 200, height: 100, backgroundColor: 'blue'}} />
    </View>
  );
}
