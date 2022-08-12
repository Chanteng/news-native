import { StyleSheet, Text, View, SafeAreaView, } from 'react-native'
import React from 'react'
// 
import GetStarted from './Screens/GetStarted'


const App = ({navigation}) => {
  return (
    <SafeAreaView  style={{flex: 1}}>
      
      <GetStarted  />
      
      
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({})