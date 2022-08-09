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

const Indicator = ({ scrollX }) => {
  return (
    <View style={{ position: "absolute", bottom: 100, flexDirection: "row",}}>
      {DATA.map((_, i) => {
        return (
          <View
            key={`indicator-${i}`}
            style={{
              height: 10,
              width: 10,
              borderRadius: 5,
              backgroundColor: "#333",
              margin: 10,
            }}
          />
        );
      })}
    </View>
  );
};



const Backdrop = ({ scrollX }) => {

    const backgroundColor = scrollX.interpolate({
        inputRange: bgs.map((_, i) => i * width),
        outputRange: bgs.map((bg) => bg),
    })

    return (
        <Animated.View 
        style={[ StyleSheet.absoluteFillObject, {
            backgroundColor,
        }]}
        />
    )
}


const GetStarted = () => {
  const scrollX = React.useRef(new Animated.Value(0)).current;

  return (
    <View style={{ flex: 1 }}>
      <StatusBar hidden />
      <Backdrop scrollX={scrollX} />
      <Animated.FlatList
        data={DATA}
        keyExtractor={(item) => item.key}
        horizontal
        scrollEventThrottle={32}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        contentContainerStyle={{ paddingBottom: 100 }}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        renderItem={({ item }) => {
          return (
            <View style={{ width, alignItems: "center", padding: 20 }}>
              <View style={{ flex: 0.7, justifyContent: "center" }}>
                <Image
                  source={item.image}
                  style={{
                    width: width / 2,
                    height: width / 2,
                    resizeMode: "contain",
                  }}
                />
              </View>
              <View style={{ flex: 0.3 }}>
                <Text
                  style={{ fontWeight: "800", fontSize: 24, marginBottom: 10 }}
                >
                  {item.title}
                </Text>
                <Text style={{ fontWeight: "300" }}>{item.description}</Text>
              </View>
            </View>
          );
        }}
      />
      <Indicator scrollX={scrollX} />
    </View>
  );
};

export default GetStarted;

const styles = StyleSheet.create({});
