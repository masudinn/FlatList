import React from 'react'
import { View, Text } from 'react-native'

import FlatListHorizontal from './page/FlatListHorizontal'
import FlatListVertical from './page/FlatListVertical'

export default function App() {
  return (
    <View>
      <FlatListHorizontal />
      {/* <FlatListVertical/> */}
    </View>
  )
}
