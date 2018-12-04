import React, { Component } from 'react';
import {Scene , Router}  from 'react-native-router-flux';

import { 
  StyleSheet,
  Text, 
  View,
  TextInput,
  TouchableOpacity,
  } from 'react-native';

import News from './News';
import Profile from './Profile';
import Chats from './Chats';



export default class Home extends Component{
  render (){
    return(
      <Router>
          <Scene
            key="tabbar"
            tabs
            tabBarStyle={{backgroundColor: "#76FF03"}}
          >

            <Scene  
              title="News" 
              //Icon={HomeIcon}
              hideNavBar={true}
              key="news"
              component={News}
              initial
            />
           

            <Scene  
              title="Profile" 
              //Icon={HomeIcon }
              hideNavBar={true}
              key="profile"
              component={Profile}
            />

            <Scene  
              title="Chats" 
              //Icon={HomeIcon}
              hideNavBar={true}
              key="chats"
              component={Chats}
            />

          </Scene>
      </Router>
    );
}}

const styles = StyleSheet.create({
  container:{
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#ffffff"
  },
  tabtext:{
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center'
  },
});