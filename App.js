import * as React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import { createAppContainer, createSwitchNavigator } from "react-navigation";

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

var AppNavigator = createSwitchNavigator({
  HomeScreen: HomeScreen,
});

const AppContainer = createAppContainer(AppNavigator);
