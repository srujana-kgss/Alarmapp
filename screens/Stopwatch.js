import React from 'react';
import { View,Text,StyleSheet } from 'react-native';
import Swcontainer from '../stopwatchc/swcontainer';


const Stopwatch = () =>{
  return(
      <View style={stylestopwatch.headingforstopeatch}>
          <Swcontainer/>
      </View>
  );
};

const stylestopwatch=StyleSheet.create({
    headingforstopeatch:{
        flex: 1,
      display: "flex",
      backgroundColor:'white',
      alignItems: 'center',
      justifyContent: 'flex-start',
      paddingTop: "8%",
},
});

export default Stopwatch;