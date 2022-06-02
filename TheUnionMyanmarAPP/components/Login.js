import React, { useState } from "react"

import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Users from "../models/Users";

//import Users from "../models/Users";

const Login = () => {

    const [data, setData] = React.useState({
        username: '',
        password: '',
        isValidPassword: true,
    });

    const textInputChange = (val) => {

        setData({ ...data, username: val })
    }
    const handlePasswordChange = (val) => {
        setData({ ...data, password: val })
    }

    const loginHandle = (username, password) => {
        const foundUser = Users.filter(data => data.username == username && data.password == password)
    }
    return (
        <View style={Styles.container}>
            <View style={Styles.header}>
                <Text style={Styles.text_header}>Welcome!</Text>
            </View>
            <Text style={Styles.text_footer}>Username</Text>

            <View style={Styles.action}>

                <TextInput
                    placeholder="Your Username"
                    placeholderTextColor="#666666"
                    style={Styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(val) => textInputChange(val)}

                />
            </View>
            <Text style={[Styles.text_footer, {
                marginTop: 35
            }]}>Password</Text>

            <View style={Styles.action}>
                <TextInput
                    placeholder="Your Password"
                    placeholderTextColor="#666666"
                    style={Styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(val) => handlePasswordChange(val)}
                />
            </View>
            <View style={Styles.button}>
                <TouchableOpacity
                    style={Styles.signIn}
                    onPress={() => { loginHandle(data.username, data.password) }}
                >

                    <Text style={[Styles.textSign, {
                        color: '#fff'
                    }]}>Sign In</Text>

                </TouchableOpacity>


            </View>

        </View>

    )
}

export default Login

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#009387'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        paddingLeft: 10,
        color: 'black',
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
})
