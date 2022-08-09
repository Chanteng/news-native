import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Animated,
  Image,
  Dimensions,
} from "react-native";
import React from "react";

const { width, height } = Dimensions.get("screen");

const bgs = ["#A5BBFF", "#DDBEFE", "#FF63ED", "#B98EFF"];
const DATA = [
  {
    key: "1",
    title: "Max TV News App",
    description: "Sport, Entertainment and More... ",
    image: require("../Images/1.jpg"),
  },
  {
    key: "2",
    title: "Max TV News App",
    description: "Sport, Entertainment and More... ",
    image: require("../Images/2.jpg"),
  },
  {
    key: "3",
    title: "Max TV News App",
    description: "Sport, Entertainment and More... ",
    image: require("../Images/3.png"),
  },
  {
    key: "4",
    title: "Max TV News App",
    description: "Sport, Entertainment and More... ",
    image: require("../Images/4.png"),
  },
];

const GetStarted = () => {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Animated.FlatList
        data={DATA}
        keyExtractor={(item) => item.key}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <View style={{width, alignItems: "center"}}>
              <Image
                source={item.image}
                style={{
                  width: width / 2,
                  height: width / 2,
                  resizeMode: "contain",
                }}
              />
            </View>
          );
        }}
      />
    </View>
  );
};

export default GetStarted;

const styles = StyleSheet.create({});
