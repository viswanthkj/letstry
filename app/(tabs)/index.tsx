import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link, router } from 'expo-router'

const Hompage = () => {
  return (
    <View>
      <Text>Hompage</Text>
     <Link href={'./users/1'}>Go to user page</Link>
    <Pressable onPress={() => router.push('./users/2')}> 
      <Text>Go to user page</Text>  
    </Pressable>
    </View>
  )
}

export default Hompage

const styles = StyleSheet.create({})