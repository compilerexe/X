import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native'
import firebase from 'react-native-firebase'
import Login from './components/Login'
import PostField from './components/PostField'
import Card from './components/Card'

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

        <Login/>

        {/*<ScrollView style={{marginBottom: 20}}>*/}
          {/*<PostField/>*/}
          {/*{*/}
            {/*this.state.posts.map((post) => {*/}
              {/*return <Card key={post._value.id} username={post._value.first_name}/>*/}
            {/*})*/}
          {/*}*/}
        {/*</ScrollView>*/}

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E9EBEE'
  }
})
