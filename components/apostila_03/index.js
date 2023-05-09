import { Text, View, TouchableOpacity } from 'react-native';

import styles from './styles';

export default function apostila03() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Exemplo Apostila 3</Text>

      <TouchableOpacity 
        style={styles.button}
        onPress={() => alert('MAIQUE PINTO')}
      >
        <Text style={styles.textButton}>Hello World!</Text>
      </TouchableOpacity>

    </View>
  );
}
