import React from 'react';
import {View, Text, ImageBackground, Image} from 'react-native';
import {TextInput} from 'react-native-paper';

export default function Chat({ navigation, route }) {
  console.log(route.params.photo)
  return (
    <View style={{flex: 1, justifyContent: 'flex-end'}}>
      <View style={{padding: 20}}>
        <Image
          style={{width: 50, height: 50, borderRadius: 25, marginBottom: 8}}  
          source={{uri: route.params.photo}}
        />
        <Text>{route.params.name} is typing...</Text>
      </View>
      <View>
        <TextInput label="Your message"/>
      </View>
    </View>
  );
}