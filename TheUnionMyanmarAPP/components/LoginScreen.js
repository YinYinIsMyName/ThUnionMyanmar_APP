import React, { useState } from "react"

import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ScrollView,
    StyleSheet,
    KeyboardAvoidingView,
    Image

} from 'react-native';

import users from "../models/users";
import HomeScreen from "./HomeScreen";


const LoginScreen = ({ props }) => {

    const [data, setData] = React.useState({
        username: '',
        password: '',
        textTrue: false,
        isValidPassword: true,
    });


    const textInputChange = (val) => {
        setData({ ...data, username: val })
    }
    const handlePasswordChange = (val) => {

        setData({ ...data, password: val })
    }

    const loginHandle = (username, password) => {

        const foundUser = users.filter(data => data.username == username && data.password == password)
        if (foundUser.length != 0) {
            props.navigation.replace('HomeScreen')
        }
        setData({ ...data, textTrue: true })


    }
    return (
        <View style={Styles.mainBody}>

            <ScrollView
                keyboardShouldPersistTaps="handled"
                contentContainerStyle={{
                    flex: 1,
                    justifyContent: 'center',
                    alignContent: 'center',
                }}>
                <View>
                    <KeyboardAvoidingView enabled>
                        <View style={{ alignItems: 'center' }}>
                            <Image
                                source={require('../assets/welcome.png')}
                                style={{
                                    width: '50%',
                                    height: 100,
                                    resizeMode: 'contain',
                                    margin: 30,
                                }}
                            />
                        </View>
                        {data.textTrue ?
                            <Text style={Styles.errorTextStyle}>
                                Username and Password are mismatched
                            </Text> : null
                        }
                        <View style={Styles.SectionStyle}>
                            <TextInput
                                style={Styles.inputStyle}
                                autoCapitalize="none"
                                onChangeText={(val) => textInputChange(val)}
                                placeholder="Enter name" //dummy@abc.com
                                placeholderTextColor="#8b9cb5"
                                returnKeyType="next"
                                underlineColorAndroid="#f000"
                                blurOnSubmit={false}

                            />
                        </View>
                        <View style={Styles.SectionStyle}>
                            <TextInput
                                style={Styles.inputStyle}
                                onChangeText={(val) => handlePasswordChange(val)}
                                placeholder="Enter Password" //12345
                                placeholderTextColor="#8b9cb5"
                                keyboardType="default"
                                blurOnSubmit={false}
                                secureTextEntry={true}
                                underlineColorAndroid="#f000"
                                returnKeyType="next"
                            />
                        </View>

                        <TouchableOpacity
                            style={Styles.buttonStyle}
                            activeOpacity={0.5}
                            onPress={() => { loginHandle(data.username, data.password) }}
                        >
                            <Text style={Styles.buttonTextStyle}>LOGIN</Text>
                        </TouchableOpacity>
                        <Text
                            style={Styles.registerTextStyle}
                        // onPress={() => this.props.navigation.navigate('RegisterScreen')}
                        >
                            Not "sign in" yet? Register
                        </Text>
                    </KeyboardAvoidingView>
                </View>
            </ScrollView>
        </View>
    )
}

export default LoginScreen

const Styles = StyleSheet.create({
    mainBody: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#051937"',
        alignContent: 'center',
    },
    SectionStyle: {
        flexDirection: 'row',
        height: 40,
        marginTop: 20,
        marginLeft: 35,
        marginRight: 35,
        margin: 10,
    },
    buttonStyle: {
        backgroundColor: '#7DE24E',
        borderWidth: 0,
        color: '#FFFFFF',
        borderColor: '#7DE24E',
        height: 40,
        alignItems: 'center',
        borderRadius: 30,
        marginLeft: 35,
        marginRight: 35,
        marginTop: 20,
        marginBottom: 25,
    },
    buttonTextStyle: {
        color: '#FFFFFF',
        paddingVertical: 10,
        fontSize: 16,
    },
    inputStyle: {
        flex: 1,
        color: 'black',
        paddingLeft: 15,
        paddingRight: 15,
        borderWidth: 1,
        borderRadius: 30,
        borderColor: '#dadae8',
    },
    registerTextStyle: {
        color: 'black',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 14,
        alignSelf: 'center',
        padding: 10,
    },
    errorTextStyle: {
        color: 'red',
        textAlign: 'center',
        fontSize: 14,
    },

})
