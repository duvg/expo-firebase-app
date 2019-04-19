import React from 'react';
import {Text, View } from 'react-native';
import AppButton from './application/components/AppButton';
import Preloader from './application/components/Preloader';
import BackgroundImage from './application/components/BackgroundImage';


export default class App extends React.Component {
  render() {
    return (
      <BackgroundImage
        source={require('./assets/images/back.png')}
      >
        <Text style={{color: '#fff', marginTop: 100, alignSelf:'center'}}>Saludos</Text>
      </BackgroundImage>
    );
  }
}
