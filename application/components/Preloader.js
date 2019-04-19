import React, {Component} from 'react';
import {ActivityIndicator, View, StyleSheet, Dimensions, Text} from 'react-native';

const {height} = Dimensions.get('window');

export default class Preloader extends Component
{
    render () 
    {
        return (
            <View style={[styles.prelaoder]}>
                <ActivityIndicator style={{height: 80}} size="large"/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    prelaoder: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: height,
        backgroundColor: '#242935'
    }
});