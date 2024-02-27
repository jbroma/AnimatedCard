import React from 'react';
import {StyleSheet, View} from 'react-native';
import PanEnabledCard from './PanEnabledCard';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

export default function App() {
  return (
    <GestureHandlerRootView style={styles.ghRoot}>
      <View style={styles.container}>
        <PanEnabledCard />
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  ghRoot: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: 'rgb(0,0,0)',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
