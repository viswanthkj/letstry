import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

const TabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{
        headerTitle: 'Home',
        title: 'home'
      }} />
      <Tabs.Screen name="users/[id]" options={{
        headerTitle: 'User',
        title: 'userpage'
      }} />
    </Tabs> 
  )
}

export default TabsLayout

const styles = StyleSheet.create({})