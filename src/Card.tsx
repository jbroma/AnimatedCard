import React from 'react';
import {Image, ImageBackground, StyleSheet, View} from 'react-native';

export default function Card() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./assets/background.png')}
        style={styles.background}
        imageStyle={styles.backgroundImage}>
        <Image source={require('./assets/ck_logo.png')} style={styles.image} />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 250,
    padding: 15,
    backgroundColor: 'rgb(120, 55, 245)',
    borderRadius: 10,
    overflow: 'hidden',
  },
  background: {
    flex: 1,
  },
  backgroundImage: {
    resizeMode: 'contain',
    bottom: '-25%',
    right: '-60%',
  },
  image: {
    width: 100,
    height: 20,
    resizeMode: 'contain',
  },
});
