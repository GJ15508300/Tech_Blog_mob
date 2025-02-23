import React from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Home = () => {

    const posts = [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }, { id: 9 }];

    const renderListCard = () => {
        return (
            <View style={Style.listCard}>
                <Image source={require('../assets/images/broken-image.png')} style={Style.postImg} />
                <View style={Style.listTextContent}>
                    <Text style={Style.listTitleText}>Introduction to the latest React JS Hooks:"Use"</Text>
                    <View style={Style.listKeyTextContent}>
                        <Text style={Style.keyText}>Hooks</Text>
                        <Text style={[Style.keyText, { marginLeft: 10 }]}>Redux</Text>
                    </View>
                    <Text style={Style.listTextDetails} numberOfLines={3}>React has consistently evolved, introducing features that enhance the developer experience and React has consistently evolved, introducing features that enhance the developer experience and  ...</Text>

                </View>
            </View>
        );
    };

    return (
        <LinearGradient
            colors={['#B9B5AC', '#000']}
            style={Style.background}
        >
            <View style={Style.profContainer}>
                <View style={Style.profContainer2}>
                    <Image source={require('../assets/images/user.png')} style={Style.profileIcon} />
                    <View style={Style.profNameContainer}>
                        <Text style={Style.profNameText}>Hello Jone Deo!</Text>
                        <Text style={Style.profMessage}>Welcome back</Text>
                    </View>
                </View>
                <View style={Style.exitContent}>
                    <Image source={require('../assets/images/exit.png')} style={Style.exitIcon} />
                </View>
            </View>

            <View style={Style.bodyContent}>
                <Text style={Style.forYouText}>For You</Text>

                <FlatList
                    data={posts}
                    renderItem={renderListCard}
                />

                <View style={Style.postBtnContent}>
                    <Text style={Style.writePostTxt}>+ Write Post</Text>
                    <View style={Style.listIconView}>
                        <View style={Style.listIconBackView}>
                            <Image source={require('../assets/images/listMenu.png')} style={Style.listMenuIcon} />
                        </View>
                        <View style={[Style.listIconBackView, { backgroundColor: '#3B3B3B' }]}>
                            <Image source={require('../assets/images/card-stack.png')} style={[Style.listMenuIcon, { tintColor: true ? '#FFFFFF' : '#000000', }]} />
                        </View>
                    </View>
                </View>
            </View>
        </LinearGradient >
    );
};
export default Home;

const Style = StyleSheet.create({
    background: {
        flex: 1,
        paddingVertical: 40,
        paddingHorizontal: 20,
    },
    profContainer: {
        // flex: 1,
        flexDirection: 'row',



        // alignContent: 'center',
        // alignItems: 'center',
        // alignSelf: 'center',
        justifyContent: 'space-between',
        // backgroundColor: 'red',
    },
    profContainer2: {
        flexDirection: 'row',
    },
    profNameContainer: {
        marginLeft: 8,
    },
    profNameText: {
        fontSize: 20,
        fontWeight: '900',
        color: '#FFFFFF',
    },
    profMessage: {
        fontSize: 16,
        color: '#FFFFFF',
    },
    profileIcon: {
        width: 47,
        height: 47,
    },
    exitContent: {
        backgroundColor: '#FFFFFF',
        // justifyContent: 'center',
        // alignContent: 'center',
        // alignItems: 'center',
        // alignSelf: 'center',
        padding: 12,
        borderRadius: 30,
    },
    exitIcon: {
        width: 30,
        height: 30,
    },
    bodyContent: {
        flex: 1,
        marginTop: 40,

    },
    forYouText: {
        fontSize: 26,
        fontWeight: '900',
        color: '#FFFFFF',
        textAlign: 'center',
        marginBottom: 21,
    },
    listCard: {
        flexDirection: 'row',
        borderRadius: 10,
        padding: 10,
        backgroundColor: '#FFFFFF',
        // alignItems: 'center',
        marginBottom: 8,
    },
    postImg: {
        width: 87,
        height: 87,
    },
    listTextContent: {
        width: '70%',
        // flex: 1,
        marginLeft: 14,
        // marginRight: 15,
        // paddingRight: 14,
        // flexWrap: 'wrap',
        // backgroundColor: 'green',
        // backgroundColor: 'lightblue',
    },
    listTitleText: {
        // flex: 1,
        fontSize: 14,
        fontWeight: '900',
        color: '#000000',
        flexWrap: 'wrap',
        // textAlign: 'center',
        marginBottom: 6,
    },
    listKeyTextContent: {
        flexDirection: 'row',
        // flexWrap: 'wrap',
        // backgroundColor: 'yellow',
        marginBottom: 6,
    },
    keyText: {
        fontSize: 12,
        fontWeight: '900',
        backgroundColor: '#FC4453',
        color: '#FFFFFF',
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 10,
        flexShrink: 1,
    },
    listTextDetails: {
        fontSize: 12,
        color: '#000000',
        // flexWrap: 'wrap',

    },
    postBtnContent: {
        position: 'absolute',
        backgroundColor: '#000000',
        flexDirection: 'row',
        // justifyContent: 'center',
        alignSelf: 'center',
        // alignContent: 'center',
        alignItems: 'center',
        bottom: 0,
        padding: 5,
        borderRadius: 30,
    },
    writePostTxt: {
        fontSize: 16,
        fontWeight: '900',
        backgroundColor: '#272727',
        color: '#FFFFFF',
        // paddingHorizontal: 8,
        // paddingVertical: 2,
        // borderRadius: 10,
        // flexShrink: 1,
        padding: 20,
        borderRadius: 30,
    },
    listIconView: {
        flexDirection: 'row',
        // justifyContent: 'center',
        // alignContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3B3B3B',
        borderRadius: 30,
        padding: 4,
    },
    listMenuIcon: {
        height: 17,
        width: 17,

    },
    listIconBackView: {
        backgroundColor: '#FFFFFF',
        // justifyContent: 'center',
        padding: 20,
        borderRadius: 30,
    },
});

