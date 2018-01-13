import React, { Component } from 'react'
import { addNavigationHelpers, StackNavigator, TabNavigator } from 'react-navigation'
import { connect } from 'react-redux'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Tab1 from './tab1'
import Tab2 from './tab2'
import Tab3 from './tab3'

const App = TabNavigator(
  {
    Screen: {
      screen: Tab1,
      navigationOptions: {
        tabBarLabel: 'Tesla',
        tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons size={30} color={tintColor} name={focused ? 'ios-home' : 'ios-home-outline'} />
        )
      }
    },
    Screen2: {
      screen: Tab2,
      navigationOptions: {
        tabBarLabel: 'BMW',
        tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons size={35} color={tintColor} name={focused ? 'ios-list' : 'ios-list-outline'} />
        )
      }
    },
    Screen3: {
      screen: Tab3,
      navigationOptions: {
        tabBarLabel: 'Tesla',
        tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons size={30} color={tintColor} name={focused ? 'ios-school' : 'ios-school-outline'} />
        )
      }
    }
  },
  {
    initialRouteName: 'Screen',
    tabBarPosition: 'bottom',
    tabBarOptions: {
      showIcon: true,
      showLabel: true,
      activeTintColor: 'black',
      inactiveTintColor: 'gray',
      labelStyle: {
        fontFamily: 'AppleSDGothicNeo-Light',
        fontSize: 11,
        color: 'gray'
      },
      style: {
        backgroundColor: '#fff',
        height: 50,
        paddingVertical: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        elevation: 4
      }
    },
    contentOptions: {
      activeTintColor: '#e91e63'
    }
  }
)

const AppMainNav = StackNavigator({
  Home: {
    screen: App 
  }
}, {
  navigationOptions: () => ({
    headerStyle: {
      backgroundColor: 'gold' 
    },
    headerTitleStyle: {
      fontWeight: 'bold',
      color: 'gold' 
    }
  }) 
})

class AppNavigation extends Component {
  render() {
    const nav = addNavigationHelpers({
      dispatch: this.props.dispatch,
      state: this.props.nav 
    })
    return <AppMainNav navigation={nav} /> 
  }
}

export default connect(state => ({
  nav: state.nav
}))(AppNavigation)

export const router = AppMainNav.router
