import React from 'react';
import {SafeAreaView,ScrollView,Button,StyleSheet,Text,View,FlatList} from 'react-native';
import { ListItem,Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { deleteAlarm } from '../../actions/alarms';
import ReactNativeAN from 'react-native-alarm-notification';     

const ListAlarms = (props) => {
    const keyExtractor = (item, index) => index.toString();
    const renderItem=({ item })=>{
        return(
            <ListItem>
                <ListItem.Content>
                    <ListItem.Title style={styles.titlesheet}>{item.time.toString()}</ListItem.Title>
                    <ListItem.Subtitle>{item.date.toString()}</ListItem.Subtitle>
                </ListItem.Content>
                <Button
                    title="trash"
                    color="red"
                    onPress={() => {
                        ReactNativeAN.deleteAlarm(item.alarmNotifData.id);  
                        ReactNativeAN.stopAlarm();                          
                        props.delete(item.value);
                    }}
                />
            </ListItem>
        );
    }
    return(
        <FlatList
            keyExtractor={keyExtractor}
            data={props.alarms}
            renderItem={renderItem}
        />

    );
};

const styles=StyleSheet.create({
    titlesheet: { fontWeight: "bold", fontSize: 30}
})

const mapStateToProps = state => {
    return {
        alarms: state.alarms.alarms,
    };
}
const mapDispatchToProps = dispatch => {
    return{
        delete: value => {
            dispatch(deleteAlarm(value));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ListAlarms);