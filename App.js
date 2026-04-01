import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function App() {
const [animal, setAnimal] = useState('');

return (
<View style={styles.app}>
<Text>Escolha um animal:</Text>

<Picker selectedValue={animal}
onValueChange={(itemValue) => setAnimal(itemValue)}>

<Picker.Item label="Selecione..." value="" />
<Picker.Item label="Cachorro" value="Cachorro" />
<Picker.Item label="Gato" value="Gato" />
<Picker.Item label="Pássaro" value="Pássaro" />
</Picker>

<Text > Você escolheu: {animal} </Text>
</View>
);
}

const styles = StyleSheet.create({
app: {
flex: 1,
justifyContent: 'center',
padding: 20,
},
});