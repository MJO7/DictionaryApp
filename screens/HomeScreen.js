import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Header } from "react-native-elements";
export default class HomeScreen extends Component {
  getWord = (word) => {
    var url = "https://www.dictionary.com/browse/" + word;
    return fetch(url).then((data) => {
      if (data.status === 200) {
        return data.json;
      } else {
        return null;
      }
    });
  };
  render() {
    return (
      <View
        style={{
          flex: 1,
        }}
      >
        <Text style={styles.text}>Dictionary</Text>
        <TextInput
          style={styles.inputBox}
          onChangeText={(text) => {
            this.setState({
              text: text,
              isSearchPressed: false,
              word: "Loading...",
              lexicalCategory: "",
              examples: [],
              defination: "",
            });
          }}
        />
        <TouchableOpacity
          style={styles.searchButton}
          onPress={() => {
            this.getWord();
          }}
        >
          <Text
            style={{
              fontSize: 40,
              color: "white",
            }}
          >
            Search
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  text: {
    borderWidth: 2,
    height: 70,
    marginTop: 35,

    width: 450,
    color: "white",
    fontSize: 50,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: "black",
  },
  inputBox: {
    borderWidth: 2,
    width: 250,
    borderRadius: 18,
    fontSize: 30,
    textAlign: "center",
    alignSelf: "center",
    marginTop: 80,
    height: 50,
  },
  searchButton: {
    borderWidth: 2,
    width: 250,
    borderRadius: 18,
    backgroundColor: "black",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",

    alignSelf: "center",
    marginTop: 80,
    height: 50,
  },
});
