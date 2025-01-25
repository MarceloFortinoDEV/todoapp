import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    image: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 20,
    },

    form: {
        padding: 25,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        gap: 10,
    },

    button: {
        backgroundColor: '#4EA8DE',
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },

    input: {
        flex: 1,
        backgroundColor: '#eeeeee',
        padding: 17,
        borderRadius: 10,
    },

    buttonRound: {
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'white',
        borderRadius: 100,
        borderWidth: 2,
        padding: 2,
        height: 25,
        width: 25,
    },

    progress: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 25,
    },

    progressContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 5
    },

    progressName: {
        fontSize: 20,
        fontWeight: 'bold',
    },

    progressValue: {
        backgroundColor: '#eeeeee',
        fontSize: 15,
        fontWeight: 'bold',
        borderRadius: 10,
        padding: 5,
        paddingHorizontal: 10,
    },

    empty: {
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20
    },

    textContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'gray',
    },

    text: {
        fontSize: 18,
        color: 'gray',
    }

})