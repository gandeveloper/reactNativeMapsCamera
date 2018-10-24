import {Platform, StyleSheet, Text, View} from 'react-native';
import {Navigation} from 'react-native-navigation'
import Icon from 'react-native-vector-icons/Feather'

import Explore from "./src/screens/Explore/Explore"
import Profile from "./src/screens/Profile/Profile"

Navigation.registerComponent(
  "social.ExploreScreen",
  () => Explore
)

Navigation.registerComponent(
  "social.ProfileScreen",
  () => Profile
)

export default () => {
  Promise.all([
    Icon.getImageSource('compass',35),
    Icon.getImageSource('user',35)
  ]).then( sources => {
    Navigation.startTabBasedApp({
      tabs: [
        {
          screen: 'social.ExploreScreen',
          icon: sources[0]
        },
        {
          screen: 'social.ProfileScreen',
          icon: sources[1]
        }
      ]
    })
  })
}


// Navigation.startSingleScreenApp({
//   screen: {
//     screen: 'social.ExploreScreen',
//     title: 'explore'
//   }
// })