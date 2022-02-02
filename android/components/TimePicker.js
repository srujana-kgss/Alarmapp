import React,{ useState } from 'react';
import {SafeAreaView,ScrollView,StyleSheet,Button,Alert,Text,View,} from 'react-native';
import { connect } from 'react-redux';
import { addAlarm } from '../../actions/alarms';
import DateTimePicker from 'react-native-modal-datetime-picker';
import ReactNativeAN from 'react-native-alarm-notification';  

const TimePicker = (props) => {
    const[isDateTimePickerVisible, setIsDateTimePickerVisible] = useState(false);
    const makeid = () => {
        var length = 5;
        var result = "";
        var characters = "0123456789";
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++){
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    };
    
    const showDateTimePicker = () => {
        setIsDateTimePickerVisible(true);
    }
    const hideDateTimePicker = () => {
        setIsDateTimePickerVisible(false);
    }
    const handleDtaePicker = (datetime) => {
        var currentTime = Date.now();
        if (datetime.getTime() < currentTime){
            Alert.alert("please choose future time");
            hideDateTimePicker();
            return;
        }

        const fireDate=ReactNativeAN.parseDate(datetime);      
        console.log('a date has been picked: ',fireDate); 
        console.log(makeid());        
        
        const alarmNotifData = {
            id: makeid(),
            title: "Alarm Ringing",
            message: "My Notification Message",
            channel: "alarm-channel",
            ticker:"My Notification Message",
            auto_cancel: true,
            vibrate: true,
            vibration: 100,
            small_icon: "ic_launcher_round",
            large_icon: "ic_launcher_round",
            play_sound: true,
            sound_name: null,
            color: "red",
            schedule_once: true,
            tag: "some_tag",
           fire_date: fireDate,             
           date: { value: datetime },
      }
      props.add(alarmNotifData);
     // ReactNativeAN.sendNotification(alarmNotifData);
      ReactNativeAN.scheduleAlarm(alarmNotifData);   
        hideDateTimePicker();
    }
    return(
       <>
          <Button
            title=' + ADD'
            color="skyblue"
            onPress={() => {
                showDateTimePicker();
                    }}
                />
                <DateTimePicker
                    mode='datetime'
                    isVisible={isDateTimePickerVisible}
                    onConfirm={handleDtaePicker}
                    onCancel={hideDateTimePicker}
                />
       </>
    );
};

const mapStateToProps = state => {
    return {};
}
const mapDispatchToProps = dispatch => {
    return{
        add:alarmNotifObj=>{
            dispatch(addAlarm(alarmNotifObj));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TimePicker);