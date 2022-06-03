import React from "react";
import {
    View,
    StyleSheet,
    Text

} from 'react-native';

const HomeScreen = () => {

    return (
        <View style={Styles.container}>
            <Text style={Styles.text}>Home</Text>

        </View >
    )
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#051937",
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        fontSize: 40,
        color: "white"
    }
})
export default HomeScreen