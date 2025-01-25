import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    
    container: {
        backgroundColor: '#eeeeee',
        borderRadius: 10,
        borderColor: '#8284FA',
        borderWidth: 1,
        padding: 20,
        marginBottom: 10,
    },
    
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },

    checkbox: {
        borderColor: '#4EA8DE',
        borderRadius: 50,
        height: 25,
        width: 25,
    },

    text: {
        fontSize: 20,
        paddingRight: 38,
    },

    button: {
        width: '100%',
        backgroundColor: '#8284FA',
        borderRadius: 5,
        marginRight: 20,
        marginTop: 5,
        padding: 10,
        alignItems: 'center'
    },

    buttonText: {
        fontSize: 20,
        fontWeight: 500,
        color: 'white',
    }

})