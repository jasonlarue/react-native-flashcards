import React from 'react';
import {
  StyleSheet,
  Button,
  Text,
  View,
  TouchableWithoutFeedback
} from 'react-native';

import FlipCard from 'react-native-flip-card';

export default class Card extends React.Component {
  state = {
    showTerm: false
  }

  /*
  Flips the showTerm flag in our state
  */

  render() {
    const textStyle = (this.state.showTerm) ? (styles.termText) : (styles.definitionText);
    return (
      <View style={[styles.container]}>

      <FlipCard
      style={styles.card}
      friction={6}
      perspective={1000}
      flipHorizontal={true}
      flipVertical={false}
      flip={false}
      clickable={true}
      onFlipEnd={(isFlipEnd)=>{console.log('isFlipEnd', isFlipEnd)}}
      >
      {/* Face Side */}
      <View style={styles.face}>
      <Text style={styles.termText}>{this.props.cardData.term}</Text>
      </View>
      {/* Back Side */}
      <View style={styles.back}>
      <Text style={styles.definitionText}>{this.props.cardData.definition}</Text>
      </View>
      </FlipCard>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    flexBasis: '50%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    padding: 20,
    height: 300
  },
  cardTitle: {
    color: '#7f8c8d',
    fontSize: 18,
    fontFamily: 'Georgia',
    position: 'absolute',
    left: 20,
    top: 20
  },
  face: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  back: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  termText: {
    textAlignVertical: 'center',
    fontSize: 50,
    fontFamily: 'Georgia-Bold'
  },
  definitionText: {
    fontSize: 30,
    fontFamily: 'Georgia'
  }
});
