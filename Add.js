import React, { useState } from 'react';
import { View, Text, TextInput, Button, } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { cards } from './Data.js';

const Add = ({ navigation }) => {
    const [villager, setVillager] = useState('');
    const [type, setType] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    return (

        <View style={{ padding: 10, marginTop: 10 }}>
            <View style={{ padding: 10 }}>
                <Text>Villager name:</Text>
                <TextInput style={{ borderWidth: 1 }} onChangeText={(text) => setVillager(text)} />
            </View>

            <View style={{ padding: 10 }}>
                <Text>Villager Species: </Text>
                <RNPickerSelect
                    value={type}
                    onValueChange={(value) => setType(value)}
                    items={[
                        { label: 'Dog', value: 'Dog' },
                        { label: 'Sheep', value: 'Sheep' },
                        { label: 'Penguin', value: 'Penguin' },
                    ]}
                />
            </View>

            <View style={{ padding: 10 }}>
                <Text>Image URL: </Text>
                <TextInput style={{ borderWidth: 1 }} onChangeText={(text) => setImageUrl(text)} />

            </View>


            <Button title="Add Villager"
                    onPress={() => {
                        let item = { key: villager, image: imageUrl };
                        let indexnum = 1;
                        if (type == "Dog") {
                            indexnum = 0;
                        }
                        if (type == "Sheep") {
                            indexnum = 1;
                        }
                        if (type == "Penguin") {
                            indexnum = 2;
                        }
                        cards[indexnum].data.push(item);
                        navigation.navigate("Home")
                    }
                    }
                    color="#c1ca5f"
            />
        </View>
    )

}

export default Add;
