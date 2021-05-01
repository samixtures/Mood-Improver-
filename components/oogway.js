import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function oogwayExample() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        There's a saying: Yesterday is history, tomorrow is a mystery, but today is a gift.  That is why it's called the present. Master Oogway (Kung-Fu-Panda) 
      </Text>
      <Image style={styles.logo} source={require('../assets/masteroogway.jpg')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 128,
    width: 128,
  }
});
