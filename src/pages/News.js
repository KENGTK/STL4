import React, { Component } from 'react';
import {Scene , Router}  from 'react-native-router-flux';

import { 
  StyleSheet,
  Text, 
  View,
  TextInput,
  TouchableOpacity,
  } from 'react-native';


export default class News extends Component{
  render (){
    return(
      <View style={styles.container}>
          <Text>
            News
          </Text>
      </View>
    );
}}

const styles = StyleSheet.create({
  container:{
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#ffffff"
  }
});