import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import Navigation from './Component/Navigation'
import GetStarted from './Screens/GetStarted'

const App = (props) => {
  return (
    <SafeAreaView  style={{flex: 1}}>
      {/* <Navigation/> */}
      <GetStarted />
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({})