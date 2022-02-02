import  React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity,FlatList,ScrollView } from 'react-native';


let padToTwo = (number) => (number <= 9 ? `0${number}`: number);
class Swcontainer extends Component{
    constructor(props){
        super(props);
        this.state = {
            min: 0,
            sec: 0,
            msec: 0
        }
        
        this.lapArr = [];

        this.interval = null;
    }
    handleToggle = () => {
        this.setState(
            {
                start: !this.state.start
            },
            () => this.handleStart()
        );
    };

    handleLap = (min, sec, msec) => {
        this.lapArr = [
            ...this.lapArr,
            {min, sec, msec}
        ]

    };
    handleStart = () => {
        if (this.state.start) {
            this.interval = setInterval(() => {
                if (this.state.msec !== 99) {
                    this.setState({
                        msec: this.state.msec + 1
                    });
                } else if (this.state.sec !== 59) {
                    this.setState({
                        msec: 0,
                        sec: ++this.state.sec
                    });
                } else {
                    this.setState({
                        msec: 0,
                        sec: 0,
                        min: ++this.state.min
                    });
                }
            }, 1);

        } else {
            clearInterval(this.interval);
        }
    };

    handleReset = () => {
        this.setState({
            min: 0,
            sec: 0,
            msec: 0,

            start: false
        });

        clearInterval(this.interval);

        this.lapArr = [];
    };
    
render(){
    
    return(
        <View style={swstyles.componenetss}>
        <View style={swstyles.parent}>
        <Text style={swstyles.child}>{padToTwo(this.state.min)+':'}</Text>
        <Text style={swstyles.child}>{padToTwo(this.state.sec)+':'}</Text>
        <Text style={swstyles.child}>{padToTwo(this.state.msec)}</Text>
        
        </View>
        <View style={swstyles.buttonParent}>
        <TouchableOpacity style={swstyles.bottonsw} onPress={this.handleReset}>
            <Text style={swstyles.buttontextsw}>Reset</Text>
        </TouchableOpacity>
        <TouchableOpacity style={swstyles.bottonsw} onPress={this.handleToggle}>
            <Text style={swstyles.buttontextsw}>{!this.state.start? 'Start': 'Stop'}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={swstyles.bottonsw} onPress={()=>this.handleLap(this.state.min, this.state.sec, this.state.msec)} disabled={!this.state.start}>
            <Text style={swstyles.buttontextsw}>lap</Text>
        </TouchableOpacity>
        </View>
        <View style={swstyles.scroll}>
        <FlatList
            data={this.lapArr}
            renderItem={({item,index}) =>(
                <Text style={swstyles.listinglaps} key={index}>Lap{index+1}    {padToTwo(item.min)}:{padToTwo(item.sec)}:{padToTwo(item.msec)}</Text>
            )}
        />

        </View>
          </View>
    )
}

}


const swstyles = StyleSheet.create({
    componenetss:{
        flex: 1,
        alignItems: 'center',
    },
    parent: {
        display: "flex",
        flexDirection: "row",
        borderWidth:2,
        borderRadius: 80,
        borderColor: "black",
        backgroundColor: 'skyblue',
        paddingLeft: "8%",
        paddingRight: "8%",
        paddingTop: ".5%",
        paddingBottom: ".5%",
    },

    child: {
      fontSize: 40,
      color: "black",
    },

    buttonParent: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: "12%",
    },
    bottonsw: {
        backgroundColor: "skyblue",
        paddingTop: "5%",
        paddingBottom: "5%",
        paddingLeft: "5%",
        paddingRight: "5%",
        display: "flex",
        borderRadius: 25,
        borderWidth: 2,
        borderColor: "black",
        height: 65,
    },
    buttontextsw: {
        color: "black",
        fontSize: 20,
        alignSelf: "center",
    },
    scroll: {
        marginTop: 20 ,
        height:"64%",
        width: 300,
        backgroundColor: "white",
    },
    listinglaps: {
        padding: 10,
        fontSize: 22,
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

export default Swcontainer;