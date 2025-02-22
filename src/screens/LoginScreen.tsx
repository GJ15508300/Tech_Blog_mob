import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-google-signin/google-signin';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import { RootStackParamList } from '../navigation/AppNavigator';
const frontIcon = require('../assets/images/undraw_login.png');
const borderIcon = require('../assets/images/login_border.png');

const { width } = Dimensions.get('window');


type NavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;



const LoginScreen = () => {
    const navigation = useNavigation<NavigationProp>();

    useEffect(() => {
        // GoogleSignin.configure({
        //     scopes: ['email', 'profile'],
        //     webClientId: '160747126488-1kgcb6e3s8rlubnch1j6ljiru9s8nam9.apps.googleusercontent.com',
        //     offlineAccess: true,
        // });
        GoogleSignin.configure({
            webClientId: '160747126488-n9l581h35fg4bgsnc1onevn9agbmpqm4.apps.googleusercontent.com',
            // webClientId: '160747126488-1kgcb6e3s8rlubnch1j6ljiru9s8nam9.apps.googleusercontent.com', // client ID of type WEB for your server. Required to get the `idToken` on the user object, and for offline access.
            scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
            forceCodeForRefreshToken: false, // [Android] related to `serverAuthCode`, read the docs link below *.
        });
    }, []);

    const signIn = async () => {
        try {
            console.log('HAI');
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            console.log('userInfo : ', userInfo);
            return userInfo;
        } catch (error: any) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                console.log('User cancelled the login flow');
            } else if (error.code === statusCodes.IN_PROGRESS) {
                console.log('Sign-in is in progress');
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                console.log('Play Services not available');
            } else {
                console.log('Some other error occurred', error);
            }
        }
    };


    return (
        <View style={Style.container}>
            <Image source={frontIcon} style={Style.img} />
            <GoogleSigninButton
                size={GoogleSigninButton.Size.Wide}
                color={GoogleSigninButton.Color.Dark}
                onPress={() => signIn()}
            />
            <Text style={Style.login} onPress={() => navigation.navigate('Home')}>Login</Text>
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
    login: {
        color: 'black',
    },
});
