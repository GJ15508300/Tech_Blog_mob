import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
const frontIcon = require('../assets/images/undraw_login.png');
const borderIcon = require('../assets/images/login_border.png');

const { width } = Dimensions.get('window');

const LoginScreen = () => {
    return (
        <View style={Style.container}>
            <Image source={frontIcon} style={Style.img} />
            <Text style={Style.title}>Login</Text>
            <Image source={borderIcon} style={Style.borderImg} />
        </View>
    );
};

export default LoginScreen;

const Style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        color: 'black',
    },
    img: {
        height: '40%',
        width: '80%',
        marginTop: '10%',
    },
    borderImg: {
        width: width,
        height: width * 0.6,
        resizeMode: 'contain',
        bottom: -30,
    },
});
