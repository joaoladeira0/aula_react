import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';


import Apostila_04_ativ from './components/apostila_04_exercicio/index.js';
import Apostila_05 from './components/apostila_05/index.js';
import Index from './components/apostila_06/index.js';

export default function App() {
  return (
    <View style={styles.container}>
      <Index/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#AAA',
    padding: 8,
    paddingTop: Constants.statusBarHeight,
  },
});
