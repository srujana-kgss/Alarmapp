import { ADD_ALARM,DELETE_ALARM} from '../actions/index';
import Momemt from 'moment';
import { act } from 'react-test-renderer';

const initialState = {
    alarms:[],
};

const alarmReducer = (state=initialState,action)=>{
    switch(action.type){
        case ADD_ALARM:
            Momemt.locale('en');
            console.log("time",state);
            const payload  = action.payload;
            const time = Momemt(payload.date.value).format("hh:mm A");
            const date = Momemt(payload.date.value).format("DD/MM/YY");
            console.log(time);
            const alarm = {
                alarmNotifData: payload,
                value: payload.date.value,
                time : time,
                date : date,
            };
            console.log(payload);
            console.log(alarm.date);
           return{
               ...state,
               alarms: state.alarms.concat(alarm)
           };
           case DELETE_ALARM:
               return{
                   ...state,
                   alarms: state.alarms.filter(v => {
                       return v.value !== action.payload;
                   }),
               };
               default:
                   return state;
    }
}

export default alarmReducer;