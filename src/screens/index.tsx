import { Image, SafeAreaView, TextInput, TouchableOpacity, View, Text, FlatList, Alert } from 'react-native'
import { styles } from './styles'
import { useState } from 'react'
import { List } from '../components/list'

interface Item {
    id: number
    text: string
    check: boolean
}

export function Home() {

    const [items, setItems] = useState<Item[]>([])

    const [item, setItem] = useState('')

    function AddItem(value:string) {
        if (items.some(item => item.text === value)) {
            setItem('')
            return Alert.alert('Não é possível criar duas tarefas com mesmo título.')
        } else if (!value) {
            setItem('')
            return Alert.alert('É obrigatório preencher o nome da tarefa.')
        }

        const Item: Item = { 
            id: items.length + 1, 
            text: value, 
            check: false ,
        }

        setItems(prevState => [...prevState, Item])

        setItem('')
    }

    function UpdateItem(value:string) {
        setItems(items.map((item:Item) => item.text === value ? { ...item, check: !item.check } : item))
    }

    function RemoveItem(value:string) {
        Alert.alert('Você realmente deseja excluir essa tarefa?', '', [
            {
                text: 'Sim',
                onPress: () => setItems(prevState => prevState.filter((item:any) => item.text !== value)),
            },
            {
                text: 'Não'
            },
        ])
    }

    return(
        <SafeAreaView>

            <View style={styles.image}>
                <Image source={require('../assets/logo.png')}/>
            </View>

            <View style={styles.form}>
                <TextInput style={styles.input} placeholderTextColor='#aaaaaa' placeholder='Digite o nome da tarefa' value={item} onChangeText={setItem} />
                <TouchableOpacity style={styles.button} onPress={() => AddItem(item)}>
                    <View style={styles.buttonRound}>
                        <Text style={{ color: '#fff' }}>+</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={styles.progress}>
                <View style={styles.progressContainer}>
                    <Text style={[styles.progressName, { color: '#4EA8DE' }]}>Criadas</Text>
                    <Text style={styles.progressValue}>{items.length}</Text>
                </View>

                <View style={styles.progressContainer}>
                    <Text style={[styles.progressName, { color: '#8284FA' }]}>Concluídas</Text>
                    <Text style={styles.progressValue}>{items.filter((item:Item) => item.check === true).length}</Text>
                </View>
            </View>

            <View style={{ width: '100%', height: 2, backgroundColor: '#eeeeee', marginTop: 20 }}/>

            <View style={{ marginTop: 20, paddingHorizontal: 25 }}>
                <FlatList data={items} keyExtractor={items => items.text} ListEmptyComponent={() => <View style={styles.empty}>
                    <Image source={require('../assets/clipboard.png')}/>
                    <View style={styles.textContainer}>
                        <Text style={styles.title}>Você ainda não tem nenhuma tarefa criada.</Text>
                        <Text style={styles.text}>Crie tarefas e organize.</Text>
                    </View>
                    </View>} renderItem={({item}) => (<List text={item.text} onCheck={() => UpdateItem(item.text)} onRemove={() => RemoveItem(item.text)}/>)}/>
            </View>


        </SafeAreaView>
    )
}