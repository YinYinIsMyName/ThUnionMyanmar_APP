/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import Login from './components/Login'

import { View, Text, Dimensions, ActivityIndicator, StyleSheet } from 'react-native';

const App = () => {
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
    return (
      <Login />
    )
  }

}


const { height } = Dimensions.get("screen")
const height_logo = height + 0.28

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

export default App;

