import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffcdd2',
    },

    texto: {
        alignSelf: 'flex-start',
        fontSize: 26,
        fontWeight: 'bold',
        color: '#b71c1c',
        textAlign: 'left',
    },
    txtSaida: {
        margin: 24, 
        fontSize: 22, 
        fontWeight: 'bold', 
        color: '#E53935',     
    }, 
    txtEntrada: {
    borderWidth: 4, 
    textAlign: 'center', 
    fontSize: 22, 
    borderColor: '#B71C1C', 
    height: 40, 
    color: '#E53935', 
    borderRadius: 10, 
    width: '70%',
    }, 
    button: {
    backgroundColor: '#E53935', 
    height: 40, 
    justifyContent: 'center', 
    borderRadius: 10, 
    marginTop: 20, 
    width: '70%',
    }, 
    textButton: {
    fontSize: 22, 
    color: '#FFCDD2', 
    textAlign: 'center', 

    }, 
});

export default styles