import React, {Component} from 'react';
import {Text, View, Image, Linking} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import  Button from './Button';

const AlbumDetail = ({album}) =>{
    const {title, artist, thumbnail_image, image, url} = album;
  return(
      <Card>
          <CardSection>
              <View style={styles.thumbnail_container}>
                  <Image style={styles.thumbnail_style} source={{uri: thumbnail_image}}/>
              </View>
              <View style={styles.headerContentStyle}>
                  <Text style={styles.header_text}>{title}</Text>
                  <Text>{artist}</Text>
              </View>
          </CardSection>
          <CardSection>
              <Image style={styles.image_style} source={{uri: image}}/>
          </CardSection>
          <CardSection>
              <Button onPress={() => Linking.openURL(url)}>
                  Buy Now!!
              </Button>
          </CardSection>
      </Card>
  )
};
const styles = {
    headerContentStyle:{
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    header_text:{
      fontSize: 18
    },
    thumbnail_style:{
        height: 50,
        width: 50
    },
    thumbnail_container:{
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    image_style:{
        height: 300,
        flex: 1,
        width: null
    }
};

export default AlbumDetail