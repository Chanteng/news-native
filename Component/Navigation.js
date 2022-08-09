import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import 'react-native-gesture-handler';
import Ionic from "react-native-vector-icons/Ionicons"
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



import Home from "../Screens/Home"
import Add from "../Screens/Add"
import Profile from "../Screens/Profile"
import Search from "../Screens/Search"
import Activity from "../Screens/Activity"



const Navigation = (props) => {

    const Tab = createBottomTabNavigator();

  return (
    <SafeAreaView  style={{flex: 1}} >
      <NavigationContainer>
        <Tab.Navigator screenOptions={({route}) => ({
          tabBarIcon: ({focused, size, colour}) => {
            let iconName;
            if(route.name === "Home") {
              iconName = focused ? "ios-home" : "ios-home-outline"
            } else if (route.name === "Search") {
              iconName = focused ? "search-sharp" : "search-outline"
            } else if (route.name === "Add") {
              iconName = focused ? "add-circle" : "add-circle-outline"
            } else if (route.name === "Activity") {
              iconName = focused ? "heart" : "heart-outline"
            } else if (route.name === "Profile") {
              iconName = focused ? "person" : "person-outline"
            }
            return <Ionic name={iconName} size={size} colour={colour} />
          },
          
        }) } >
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Search" component={Search} />
          <Tab.Screen name="Add" component={Add} />
          <Tab.Screen name="Activity" component={Activity} />
          <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
      </NavigationContainer>
    
    </SafeAreaView>
  )
}

export default Navigation

const styles = StyleSheet.create({})