import 'expo-dev-client';
import React from 'react';
import { Text, View, SafeAreaView, StyleSheet } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Hi cro</Text>
      </View>
      <View style={styles.content2}>
        <Text style={styles.title}>Hi cro</Text>
      </View>
      <View style={styles.content3}>
        <Text style={styles.title}>Hi cro</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    color: 'blue',
    fontSize: 20
  },
  content: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
    paddingLeft: 40
  },
  content2: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  content3: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center",
    paddingRight: 40
  },
  container: {
    flex: 1,
    backgroundColor: '#a5e5f5'
  }
});