import { View, Text, TouchableOpacity, Image } from 'react-native'
import CheckBox from 'expo-checkbox'
import { styles } from './styles'
import { useState } from 'react'

interface List {
    text: string
    onCheck: () => void
    onRemove: () => void
}

export function List({ text, onCheck, onRemove }:List) {

    const [check, setCheck] = useState(false)

    function makeAsDone() {
        setCheck(!check);

        onCheck()
    }

    return(
        <View style={styles.container}>
            <View style={styles.content}>
                <CheckBox style={styles.checkbox} value={check} onValueChange={makeAsDone}/>
                <Text style={[styles.text, check && { textDecorationLine: 'line-through' }]}>{text}</Text>
            </View>
            <TouchableOpacity onPress={onRemove} style={styles.button}>
                <Text style={styles.buttonText}>Remover</Text>
            </TouchableOpacity>
        </View>
    )
}