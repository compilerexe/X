import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native'

export default class Card extends Component {

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View>
            <Image
              source={{uri: 'https://goo.gl/dzrQaM'}}
              style={styles.img}
            />
          </View>
          <View>
            <Text style={styles.font_username}>{this.props.username}</Text>
          </View>
        </View>
        <View style={styles.body}>
          <Text>Simple detail ...</Text>
        </View>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 5,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10
  },
  header: {
    flexDirection: 'row'
  },
  img: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  font_username: {
    color: '#385A97',
    fontWeight: '700',
    marginTop: 17.5,
    marginLeft: 10
  },
  body: {
    marginTop: 10
  }
})