import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function App() {
  return <View style={styles.view} />;
}

const styles = StyleSheet.create({
  view: {
    borderWidth: 200,
    display: 'none',
  },
});