import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { Home } from './src/screens';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
        <StatusBar style='dark'/>
        <Home/>
    </View>
  );
}