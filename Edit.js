import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { cards } from './Data.js';

const Edit = ({ navigation, route }) => {
    const [villager, setVillager] = useState(route.params.key);
    return (

        <View style={{ padding: 10, marginTop: 10 }}>

            <View style={{ padding: 10 }}>
                <Text>Villager name:</Text>
                <TextInput style={{ borderWidth: 1 }} value={villager} onChangeText={(text) => setVillager(text)} />
            </View>

            <View style={{ padding: 10, flexDirection: 'row', justifyContent: 'space-between', }}>

                <View style={{ flex: 1, margin: 10 }}>
                    <Button title="Save" color="#7cc200"
                            onPress={() => {
                                let indexnum = 1
                                if (route.params.type == "Dog") {
                                    indexnum = 0;
                                }
                                if (route.params.type == "Sheep") {
                                    indexnum = 1;
                                }
                                if (route.params.type == "Penguin") {
                                    indexnum = 2;
                                }
                                cards[indexnum].data[route.params.index].key = villager;
                                navigation.navigate("Home")
                            }
                            }
                    />
                </View>

                <View style={{ flex: 1, margin: 10 }}>
                    <Button title="Delete" color="#c8283a"
                            onPress={() => {
                                let indexnum = 1
                                if (route.params.type == "Dog") {
                                    indexnum = 0;
                                }
                                if (route.params.type == "Sheep") {
                                    indexnum = 1;
                                }
                                if (route.params.type == "Penguin") {
                                    indexnum = 2;
                                }
                                Alert.alert("Are you sure?", '',
                                    [{
                                        text: "Yes", onPress: () => {
                                            cards[indexnum].data.splice(route.params.index, 1);
                                            navigation.navigate("Home")
                                        }
                                    },
                                        { text: 'No' }])
                            }
                            }
                    />
                </View>

            </View>
        </View>
    )
}


export default Edit;
