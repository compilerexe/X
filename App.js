import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View
} from 'react-native'
import firebase from 'react-native-firebase'

export default class App extends Component<{}> {

  constructor (props) {
    super(props)
    this.state = {
      posts: []
    }
  }

  componentDidMount () {
    let obj = firebase.database().ref('/')

    obj.on('value', (Snapshot) => {
      const buffer = []
      Snapshot.forEach((v) => {
        buffer.push(v)
      })
      this.setState({posts: buffer})
    })
  }

  render () {
    return (
      <View style={styles.container}>
        {
          this.state.posts.map((v) => {
            return <Text key={v._value.id}>{v._value.first_name}</Text>
          })
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
})
