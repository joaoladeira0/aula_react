import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';

import Apostila04 from './components/apostila_04_exercicio/index.js';

export default function App() {
  return (
    <View style={styles.container}>
      <Apostila04 />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c51162',
    padding: 8,
    paddingTop: Constants.statusBarHeight,
  },
});
