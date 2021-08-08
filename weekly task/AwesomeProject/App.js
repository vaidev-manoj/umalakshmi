import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View,} from 'react-native';
import AppButton from './app/component/AppButton';


import ViewImagescreen from './screens/ViewImagescreen';
import WelcomeScreen from './screens/WelcomeScreen';
import Card from './app/component/card';
import Cardlist from './screens/cardlist';
import Carddetails from './screens/carddetails';
import Profilelister from './app/component/profilelister';

import MyAccountScreen from './screens/MyAccount';
import Email from './app/component/Email';
import MainScreen from './screens/MainScreen';



export default function App() {
  return (

<MainScreen></MainScreen>
  );
}

const styles = StyleSheet.create({
  container: {
   
    
    alignItems: 'center',
    justifyContent: 'center',
    alignContent:'center'
  }
});
