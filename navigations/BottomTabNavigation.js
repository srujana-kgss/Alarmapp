import React from "react";
import {View,Text} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Stopwatch from "../screens/Stopwatch";
import Alarmscreen from "../screens/AlarmScreen";
import Timerscreen from "../screens/Timerscreen";
const Tab = createBottomTabNavigator();
export default function BottomTabNavigation(){
    return(
        <Tab.Navigator>
            <Tab.Screen name="Alarm" component={Alarmscreen} 
            options={{
                tabBarLabel: 'Alarm',
                tabBarIcon: ({ color, size}) => (
                    <MaterialCommunityIcons name="alarm" color={color} size={size}/>
                ),
            }}/>
            <Tab.Screen name="timer" component={Timerscreen}
                options={{
                tabBarLabel: 'Timer',
                tabBarIcon: ({ color, size}) => (
                    <MaterialCommunityIcons name="timer-sand-full" color={color} size={size}/>
                ),
            }}/>
            
            <Tab.Screen name="stopwatch" component={Stopwatch}
            options={{
                tabBarLabel: 'Stopwatch',
                tabBarIcon: ({ color, size}) => (
                    <MaterialCommunityIcons name="timer" color={color} size={size}/>
                ),
            }}
                
            />
        </Tab.Navigator>
    )
};