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
        title='Mercedes' 
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
          <Image style={imageStyle} source={{ uri: 'https://www.azureazure.com/files/Images/Bulletins/SpecialToys/mercedes_benz_amg_vision_gt/Mercedes-Benz-AMG-Vision-GT-03.jpg' }} />
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Text style={{ fontSize: 40 }}>Mercedes-AMG</Text>
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
