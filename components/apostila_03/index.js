import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import styles from './styles';

export default function apostila03() {

  const [contador, setContador] = useState(0);

  function AddNumber() {
    setContador(contador + 1);
  }

  function SubNumber() {
    setContador(contador - 1);
  }

  function ZeroNumber(){
    setContador(0);

  }

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Exemplo Apostila 3</Text>


      <View style={styles.counter}>
        
      <View style={styles.horizontal}>
      <TouchableOpacity 
        style={styles.botaoSinal}
        onPress={() => SubNumber()}
      >
        <Text style={styles.textButton}>-</Text>
      </TouchableOpacity>

      <Text style={styles.textCounter}>{contador}</Text>

      <TouchableOpacity 
        style={styles.botaoSinal}
        onPress={() => AddNumber()}
      
      >
        <Text style={styles.textButton}>+</Text>

      </TouchableOpacity>

      </View>

      <View>
      
      <TouchableOpacity 
        style={styles.botaoSinal}
        onPress={() => ZeroNumber()}
      >

      <Text style={styles.textButton}>Zerar</Text>
        
      </TouchableOpacity>

      </View>
      </View>


      
    </View>
  );
}
