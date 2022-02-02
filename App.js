import React,{useEffect} from 'react';
import {SafeAreaView,ScrollView,StyleSheet,Text,View,} from 'react-native';
import ListAlarms from './android/components/ListAlarms';
import TimePicker from './android/components/TimePicker';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigation from './navigations/BottomTabNavigation';


export default function App() {
  return(
        <NavigationContainer>
    <BottomTabNavigation/>
  </NavigationContainer>
    
  );
};

const styles = StyleSheet.create({
  mainContainer:{
    flex: 1,
    alignItems: "center",
  },
  heading:{
    fontSize:25,
    padding:20,
    color:'black',
  },
  timePicker:{
    paddingTop:"10%",
    width:"50%",
    bottom:20,
  },
  listAlarms:{
    flex:1,
    width:"100%",
  }
});

