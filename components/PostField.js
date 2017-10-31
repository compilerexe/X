import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native'

export default class PostField extends Component {

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>What's on your mind?</Text>
        <TextInput style={styles.field}/>
        <TouchableOpacity>
          <View style={styles.btn}>
            <Text style={styles.label}>Post</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 50,
    marginBottom: 10
  },
  text: {
    fontSize: 18,
    marginLeft: 10
  },
  field: {
    width: '94%',
    height: 50,
    borderWidth: 1,
    borderColor: 'white',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 5,
    backgroundColor: 'white'
  },
  label: {
    fontSize: 18,
    color: 'white'
  },
  btn: {
    alignItems: 'center',
    backgroundColor: '#385A97',
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 5
  }
})