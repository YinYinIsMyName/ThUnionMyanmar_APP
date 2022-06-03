import React, { useState, useEffect } from "react"
import {
    ActivityIndicator,
    View,
    StyleSheet,
    Text

} from 'react-native';
import LoginScreen from "./LoginScreen";

const SplashScreen = () => {


    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 3000);

    }, []);

    if (isLoading) {
        return (
            <View style={Styles.container}>
                <Text style={Styles.text}>Welcome</Text>
                <ActivityIndicator />
            </View >
        )
    }

    else {
        return <LoginScreen />
    }


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

export default SplashScreen