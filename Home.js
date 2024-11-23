import React from 'react';
import { StatusBar, Button, SectionList, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { cards } from './Data.js';


const styles = StyleSheet.create({
    itemStyle: {
        alignItems: 'center',
        borderWidth: 2,
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
    },


    headerStyle: {
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },

    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingLeft: 5

    },

    wordsStyle: {
        flexDirection: 'column',
        alignItems: 'center',
    },

    textStyle: {
        fontSize: 15,
    },

    imageStyle: {
        width: 230,
        height: 360,
        resizeMode: 'contain'
    },

    dogIcon: {
        color: "#a36b33",
    },

    sheepIcon: {
        color: "#129c1c",
    },

    penguinIcon: {
        color: "#1d3c91",
    },
})

const Home = ({ navigation }) => {
    const renderItem = ({ item, index, section, imageUrl }) => {
        return (
            <TouchableOpacity style={styles.itemStyle}
                              onPress={() => {
                                  navigation.navigate("Edit", { index: index, type: section.title, image: imageUrl, key: item.key })
                              }
                              }
            >
                <View style={styles.wordsStyle}>
                    <Text style={styles.textStyle} > {item.key}</Text>
                </View>

                <Image
                    source={{ uri: item.image }}
                    style={styles.imageStyle}

                    // style={{ width: 330, height: 460 }}
                />
            </TouchableOpacity>
        );
    };
    return (

        <View style={{ marginBottom: 50, margin: 10 }}>
            <StatusBar hidden={true} />

            <Text></Text>
            <Text></Text>
            <Button title="Add Villager" color="#00adc1" onPress={() => { navigation.navigate('Add') }} />
            <Text></Text>

            <SectionList style={{ marginBottom: 50, }}
                         sections={cards}
                         renderItem={renderItem}
                         renderSectionHeader={({ section: { title, bgcolor, icon } }) => (
                             <View style={[styles.headerStyle, { backgroundColor: bgcolor }]}>
                                 {icon === "dog" && <MaterialCommunityIcons name="dog" size={24} style={styles.dogIcon} />}
                                 {icon === "sheep" && <MaterialCommunityIcons name="sheep" size={24} style={styles.sheepIcon} />}
                                 {icon === "penguin" && <MaterialCommunityIcons name="penguin" size={24} style={styles.penguinIcon} />}

                                 <Text style={styles.headerText}>{title}</Text>
                             </View>

                         )}
                         contentContainerStyle={{ paddingBottom: 50 }} // Add padding at the bottom
            />

        </View>
    );

}
export default Home;
