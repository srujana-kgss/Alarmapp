import React, {useState} from 'react';


import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
  TextInput,FlatList
} from 'react-native';
import { Button } from 'react-native-elements/dist/buttons/Button';
import { LongPressGestureHandler } from 'react-native-gesture-handler';


import {Timer} from 'react-native-stopwatch-timer';

const Timerscreen = () => {
  
  const [isTimerStart, setIsTimerStart] = useState(false);
  const [timerDuration, setTimerDuration] = useState(90000);
  const [resetTimer, setResetTimer] = useState(false);

return (

    
    
      <View style={styles.container}>
       <View style={styles.sectionStyle}>
          <Timer
            totalDuration={timerDuration}
            secs
            start={isTimerStart}
            reset={resetTimer}
            options={options}
            
            handleFinish={() => {
              setIsTimerStart(false);
              setTimerDuration(0);
              setResetTimer(true);
            }}
          
            getTime={(time) => {
              console.log(time);
            }}
          />
          <TextInput style={{height: 48,width: 190, borderColor: 'black', borderRadius: 25,color: "black",
                borderWidth: 2,margin:30,
        fontSize:15,}} placeholder=" Enter time in sec" keyboardType='numeric' placeholderTextColor='black'
          onChangeText={(val) => setTimerDuration(parseInt(val*1000))}/>
          <TouchableOpacity onPress={() => {
              setIsTimerStart(false);
              setResetTimer(true);
            }}>
           <Text style={styles.buttonText}>RESET</Text>
          </TouchableOpacity>
            <TouchableOpacity onPress={() => {
             setIsTimerStart(!isTimerStart);
              setResetTimer(false);
            }}>
           <Text style={styles.buttonText}>{!isTimerStart ? 'START' : 'STOP'}</Text>
          </TouchableOpacity>
         
          </View>
          </View>
       
    
    
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor:'white',
  },
  sectionStyle: {
    flex: 1,
    marginTop: 50,
    alignItems: 'center',
    
  },
  buttonText: {
    fontSize: 20,
    marginTop: 10,
    color:'black',
    borderRadius: 25,
    borderWidth: 2,
    height:55,
    width:120,
    textAlign: "center",
    borderColor: "black",
    backgroundColor:'skyblue',

  },
  scrolling:{
    marginTop: 10 ,
        height:"30%",
        width: 300,
        backgroundColor: "pink",
  },
  listingtimes: {
    padding: 10,
    fontSize: 20,
    height: 55,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: "black",
    color: "black",
    textAlign: "center",
    backgroundColor: "skyblue",
    marginBottom: 1,
},
});

const options = {
  container: {
    backgroundColor: 'skyblue',
    padding: 5,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: 'black',
    width: 200,
    alignItems: 'center',
  },
  text: {
    fontSize: 25,
    color: 'black',
    marginLeft: 7,
  },
};



export default Timerscreen;