import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Home = () => {
    return (
        <View style={Style.content}><Text style={Style.title}>Home</Text></View>
    );
};
export default Home;

const Style = StyleSheet.create({
    content: {
        flex: 1,
        // alignContent: 'center',
        // alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        // backgroundColor: 'red',
    },
    title: {
        color: 'black',
    },
});

