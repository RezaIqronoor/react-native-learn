import React, { useEffect } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const App = props => {

  return (
    <View style={s.container}>
      <View style={s.cardContainer}>
        <Image style={s.cardImage} />
        <Text style={s.cardTitle}>
          Title
        </Text>
        <Text style={s.cardSub}>
          When developing with react-native, you need to manually adjust your app to look great on a variety of different screen sizes. That's a tedious job.
          react-native-size-matters provides some simple tooling to make your scaling a whole lot easier.
          The idea is to develop once on a standard ~5" screen mobile device and then simply apply the provided utils.
          📖 You can read more about what led to this library on my blog post, which can be found in this repo or at Soluto Engineering Blog.
        </Text>
      </View>
    </View>
  )
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: scale(16),
    alignItems: 'center',
    justifyContent: 'center'
  },
  cardContainer: {
    height: verticalScale(800),
    width: scale(350),
    backgroundColor: 'white',
    elevation: 6,
    borderRadius: scale(8)
  },
  cardImage: {
    height: verticalScale(200),
    width: scale(350),
    backgroundColor: 'lightgrey',
    borderTopLeftRadius: scale(10),
    borderTopRightRadius: scale(10)
  },
  cardTitle: {
    margin: scale(16),
    fontSize: moderateScale(24),
    fontWeight: 'bold'
  },
  cardSub: {
    padding: scale(16),
    fontSize: moderateScale(14)
  }
})

export default App