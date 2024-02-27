import React, {useState} from 'react';
import {StyleSheet, Text, View, Switch, LayoutAnimation} from 'react-native';
import PanEnabledCard from './PanEnabledCard';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import SensorEnabledCard from './SensorEnabledCard';

export default function App() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    setIsEnabled(previousState => !previousState);
  };

  return (
    <GestureHandlerRootView style={styles.ghRoot}>
      <View style={styles.container}>
        {isEnabled ? <SensorEnabledCard /> : <PanEnabledCard />}
      </View>
      <View style={styles.switchContainer}>
        <Text style={styles.text}>
          {isEnabled ? 'Sensor Card' : 'Pan Card'}
        </Text>
        <Switch
          onValueChange={toggleSwitch}
          value={isEnabled}
          style={styles.switch}
        />
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
  switchContainer: {
    position: 'absolute',
    top: 100,
    left: 20,
    right: 20,
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 50,
    fontFamily: 'HelveticaNeue-Thin',
  },
  switch: {
    marginTop: 30,
  },
});
