import React from 'react';
import {SafeAreaView,ScrollView,StyleSheet,Text,View,} from 'react-native';
import ListAlarms from '../android/components/ListAlarms';
import TimePicker from '../android/components/TimePicker';


const Alarmscreen = () => {
    return(
        <View style={styles.mainContainer}>
        
     <Text style={styles.heading}>Alarm list</Text>
     <SafeAreaView style={styles.listAlarms}>
       <ListAlarms/>
     </SafeAreaView>
     <View style={styles.timePicker}>
      <TimePicker/>
     </View>
   </View>
    );
}

const styles = StyleSheet.create({
    mainContainer:{
      flex: 1,
      alignItems: "center",
      backgroundColor:"white",
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
export default Alarmscreen;