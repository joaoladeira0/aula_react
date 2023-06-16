import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, PermissionsAndroid} from 'react-native';

import styles from './styles';

export default function Index() {

    const [massa, setMassa] = useState(0);
    const [altura, setAltura] = useState(0);
    const [resultado, setResultado] = useState(0);


    function Calcular() {
        const valor = massa / (altura * altura);
        setResultado(valor);

    }

    function CalculoImc() {
        if (resultado <= 18.5) {
            return ('Abaixo');

        } else if (resultado > 18.5 && resultado <= 24.9) {
            return ('Normal');

        } else if (resultado >= 25 && resultado <= 29.9) {
            return ('Sobrepeso');

        } else if (resultado >= 30 && resultado <= 34.9) {
            return ('Obesidade Grau 1');

        } else if (resultado >= 35 && resultado <= 39.9) {
            return ('Obesidade Grau 2');

        } else if (resultado >= 40) {
            return ('Obesidade Grau 3');

        } else {
            return ('Esperando')
        } ;

    }

    return (
        <View style={styles.container}>
            <Text style={styles.paragraph}> Exemplo 6 </Text>
            <View style={styles.entradaImc}>
                <TextInput placeholder='Massa' placeholderTextColor='lightgrey' keyboardType='numeric' style={styles.input} onChangeText={(entrada) => setMassa(entrada)} />
                <TextInput placeholder='Altura' placeholderTextColor='lightgrey' keyboardType='numeric' style={styles.input}
                onChangeText={(entrada) => setAltura(entrada)} />            
            </View>

            <TouchableOpacity style={styles.button} onPress={() => Calcular()}>
                <Text style={styles.buttonText}> Calcular </Text>
            </TouchableOpacity>
            <Text style={styles.resultados}>{resultado.toFixed(2)}</Text>
            <Text style={styles.resultado}>{CalculoImc()}</Text>
        </View>
    );
}
