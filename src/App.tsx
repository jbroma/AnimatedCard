import React from 'react';
import {StyleSheet, View, useWindowDimensions} from 'react-native';
import Card from './Card';
import {Canvas} from '@shopify/react-native-skia';

const CANVAS_HEIGHT = 250;

export default function App() {
  const {width: windowWidth} = useWindowDimensions();

  return (
    <View style={styles.container}>
      <Canvas style={{width: windowWidth * 0.9, height: CANVAS_HEIGHT}}>
        <Card canvasSize={{width: windowWidth * 0.9, height: CANVAS_HEIGHT}} />
      </Canvas>
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
  },
});
