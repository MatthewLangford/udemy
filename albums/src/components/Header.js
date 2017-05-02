import React, {Component} from 'react';
import {Text, View} from 'react-native';

export default class Header extends Component{
    render() {
        return (
        <View style={style.viewStyle}>
            <Text style={style.textStyle}>{this.props.text}</Text>
        </View>
        )
    }
}

const style ={
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20
    }
};
