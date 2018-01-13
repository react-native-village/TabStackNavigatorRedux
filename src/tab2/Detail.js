import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  ScrollView,
  Dimensions
} from 'react-native'
import { 
  Header 
} from '../common'

const win = Dimensions.get('window')

class Detail extends Component {
  static navigationOptions = ({ navigation }) => ({
    header:  
      <Header 
        title='BMW' 
        backButton
        leftIcon='ios-arrow-back'
        colorLeft='black'
        navigation={navigation} 
        screen='goBack'
      />
  })

  render() {
    const { container, imageStyle } = styles

    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={container}>
          <Image style={imageStyle} source={{ uri: 'https://static.dealer.com/v9/variations/oem-bmw/0002/v1/images/index-bb-3.jpg?r=1502896527000' }} />
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Text style={{ fontSize: 40 }}>BMW</Text>
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    position: 'relative'
  },
  imageStyle: {
    alignSelf: 'stretch',
    backgroundColor: 'transparent',
    width: win.width,
    height: win.width
  }
}

export default Detail
