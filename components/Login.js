import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native'
//import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin'
import Icon from 'react-native-vector-icons/FontAwesome'
//import SafariView from 'react-native-safari-view'

const Login = () => {

  return (

    <View style={styles.container}>

      <Icon.Button name='google' backgroundColor='#DD4B39' onPress={this.loginWithGoogle}>Google</Icon.Button>

    </View>

  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Login