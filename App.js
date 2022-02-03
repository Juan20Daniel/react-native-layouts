import React from 'react';
import { StyleSheet, View, Image, Text, ScrollView } from 'react-native';

export default function App() {
  return (
    <>
      <View>
        <View style={{ flexDirection: 'row' }}>
          <Image 
              style={styles.banner}
              source={require('./assets/img/bg.jpg')}
            />
        </View>
        <View style={styles.container}>
          <Text style={styles.title}>Qué hacer en paris</Text>
          <ScrollView
            horizontal
          >
            <Image 
              style={styles.imageee}
              source={require('./assets/img/actividad1.jpg')}
            />
            <Image 
              style={styles.imageee}
              source={require('./assets/img/actividad2.jpg')}
            />
            <Image 
              style={styles.imageee}
              source={require('./assets/img/actividad3.jpg')}
            />
            <Image 
              style={styles.imageee}
              source={require('./assets/img/actividad4.jpg')}
            />
            <Image 
              style={styles.imageee}
              source={require('./assets/img/actividad5.jpg')}
            />
          </ScrollView>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  banner: {
    flex: 1,
    height: 250
  },
  title: {
    fontWeight:'bold',
    fontSize: 24,
    marginVertical: 20
  },
  container: {
    flex: 1,
    marginHorizontal: 10
  },  
  imageee: {
    width: 400,
    height: 250,
    marginRight: 10
  }
});