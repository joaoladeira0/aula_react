import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, PermissionsAndroid} from 'react-native';

import styles from './styles';

export default function Index() {

    const [massa, setMassa] = useState(0);
    const [altura, setAltura] = useState(0);
    const [resultado, setResultado] = useState(0);


    return (
        <View style={styles.container}>
            <Text style={styles.paragraph}> Exemplo 6 </Text>
            <View style={styles.entradaImc}>
                <TextInput placeholder='Massa' placeholderTextColor='lightgrey' keyboardType='numeric' style={styles.input} />
                <TextInput placeholder='Altura' placeholderTextColor='lightgrey' keyboardType='numeric' style={styles.input} />            
            </View>
            <TouchableOpacity style={styles.button} onPress={() => {}}>
                <Text style={styles.buttonText}> Calcular </Text>
            </TouchableOpacity>
            <Text style={styles.resultados}>{resultado}</Text>
        </View>
    );
}
