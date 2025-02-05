import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Home = () => {
    return (
        <View><Text style={Style.title}>Home</Text></View>
    );
};
export default Home;

const Style = StyleSheet.create({
    title: {
        color: 'white',
    },
});

