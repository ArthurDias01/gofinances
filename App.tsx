import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Platform } from 'react-native';
import { Welcome } from './src/components/Welcome';

export default function App() {
  return (
    <>
      {Platform.OS === "ios" && <SafeAreaView />}
      <View style={styles.container}>
        <StatusBar style="auto" />

        <Welcome title="Oi delícia! <3 te amo! Casa comigo!?" />
        <Welcome title="Oi delícia! <3 te amo! Casa comigo!?" />
        <Welcome title="Oi delícia! <3 te amo! Casa comigo!?" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
