import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';

import Apostila04 from './components/apostila_04/index.js';

let corApp = '#000';

export default function App() {
  return (
    <View style={styles.container}>
      <Apostila04 />
      <StatusBar style={corApp == '#000' ? "light" : "dark"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: corApp,
    padding: 8,
    paddingTop: Constants.statusBarHeight,
  },
});
