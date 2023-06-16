import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#EEE',
      padding: 8,
    },
    paragraph: {
      margin: 6,
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center', 
      color: '#AAA', 
    }, 
    entradaImc: {
      flex: 1, 
      flexDirection: 'row', 
    }, 
    input: {
      height: 80, 
      textAlign: 'center', 
      width: '50%', 
      fontSize: 50, 
      marginTop: 24, 
      color: 'lightgray',  
    }, 
    button: {
      backgroundColor: '#89FFA5',
    }, 
    buttonText: {
      alignSelf: 'center', 
      padding: 15, 
      fontSize: 35, 
      color: '#6DC4A4',
      fontWeight: 'bold', 
    },
    resultados: {
      alignSelf: 'center', 
      color: 'lightgray', 
      fontSize: 50, 
      padding: 15, 
    }, 
    resultado: {
      textAlign: 'center',
      alignSelf: 'center', 
      color: 'lightgray', 
      fontSize: 35, 
      padding: 15, 
    }, 
  });

  export default styles;