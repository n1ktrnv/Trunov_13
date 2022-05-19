import * as React from 'react';
import { Text, View,Image, StyleSheet, Pressable, Button, TouchableOpacity, ImageBackground, Dimensions, Alert, Share } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Constants from 'expo-constants';
import Chat from './Chat';



const Stack = createNativeStackNavigator();

const Contacts = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Contacts' }}
        />
        <Stack.Screen 
        name="Profile" 
        component={ProfileScreen} 
        />
        <Stack.Screen 
        name="Call" 
        component={CallScreen} 
        />
        <Stack.Screen 
        name="VideoCall" 
        component={VideoCallScreen} 
        /> 
        <Stack.Screen 
        name="Chat" 
        component={Chat} 
        /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
};


const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Pressable 
        onPress={() =>
          navigation.navigate('Profile', { name: 'Bill Gates', photo: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Visit_of_Bill_Gates%2C_Chairman_of_Breakthrough_Energy_Ventures%2C_to_the_European_Commission_5_%28cropped%29.jpg', phone: "0109876652" })
        }
        style={styles.button}
      >
      <View style={styles.container}>
        <Image style = {styles.picture}
        source={{
          uri: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Visit_of_Bill_Gates%2C_Chairman_of_Breakthrough_Energy_Ventures%2C_to_the_European_Commission_5_%28cropped%29.jpg',
        }}
        />
         <Text style={styles.text}>Bill Gates</Text>
         </View>
      </Pressable>

      <Pressable 
        onPress={() =>
          navigation.navigate('Profile', { name: 'Sundar Pichai', photo: 'https://i1.wp.com/reputationcapital.blog/wp-content/uploads/2019/09/Sundar-Pichai.jpg?ssl=1', phone: "0105567652" })
        }
        style={styles.button}
      >
         <View style={styles.container}>
        <Image style = {styles.picture}
        source={{
          uri: 'https://i1.wp.com/reputationcapital.blog/wp-content/uploads/2019/09/Sundar-Pichai.jpg?ssl=1',
        }}
        />
         <Text style={styles.text}>Sundar Pichai</Text>
         </View>
      </Pressable>

      <Pressable 
        onPress={() =>
          navigation.navigate('Profile', { name: 'Ilon Mask', photo: 'https://icdn.lenta.ru/images/2022/01/04/05/20220104052850023/pwa_list_rect_1024_93a01881243b9fa18b363699b91b6f6b.jpg', phone: "01096787652" })
        }
        style={styles.button}
      >
          <View style={styles.container}>
        <Image style = {styles.picture}
        source={{
          uri: 'https://icdn.lenta.ru/images/2022/01/04/05/20220104052850023/pwa_list_rect_1024_93a01881243b9fa18b363699b91b6f6b.jpg',
        }}
        />
         <Text style={styles.text}>Ilon Mask</Text>
         </View>
      </Pressable>

      <Pressable 
        onPress={() =>
          navigation.navigate('Profile', { name: 'Tim Cook', photo: 'https://www.ixbt.com/img/n1/news/2021/7/1/12-2_large.png', phone: '0109785567' })
        }
        style={styles.button}
      >
          <View style={styles.container}>
        <Image style = {styles.picture}
        source={{
          uri: 'https://www.ixbt.com/img/n1/news/2021/7/1/12-2_large.png',
        }}
        />
         <Text style={styles.text}>Tim Cook</Text>
         </View>
      </Pressable>
      </View>

  );
};

const ProfileScreen = ({ navigation, route }) => {
  const onShare = async (phone) => {
        try {
            const result = await Share.share({
                message: 'Мой телефон: ' + phone,
            });
        } catch (error) {
            alert(error.message);
        }
    };

  return (
  <View style={styles.profile}>
      <Image style = {styles.profilePicture}
        source={{
          uri: route.params.photo,
        }}
        />
      <Text style={styles.profileText}>{route.params.name}</Text>
      <Text style={styles.phoneNumber}> {route.params.phone} </Text> 

      <View style={styles.actionContainer}>
    
        <TouchableOpacity  style={{flex: 1}}
          onPress={() =>
            navigation.navigate('Call', {name: route.params.name, photo: route.params.photo, phone: route.params.phone})
          }>

          <Image style = {styles.icon}
                  source={{
                  uri: 'https://naliboki.stolbtsy-edu.gov.by/files/00524/obj/120/30163/img/540f27e940c088c6138b98cc_5fe55dd98ec52.jpg',
                  }}
                />
        </TouchableOpacity>

        <TouchableOpacity
          style={{flex: 1}}
          onPress={() => navigation.navigate('Chat', {name: route.params.name, photo: route.params.photo, phone: route.params.phone})}
          >
            <Image style = {styles.icon}
                source={{
                uri: 'https://maxcdn.icons8.com/Share/icon/p1em/Messaging/message1600.png',
                }}
              />
        </TouchableOpacity>

        <TouchableOpacity  style={{flex: 1}}
          onPress={() =>
            navigation.navigate('VideoCall', {name: route.params.name, photo: route.params.photo, phone: route.params.phone})
          }>
          <Image style = {styles.icon} 
            source={{
            uri: 'https://icon-library.com/images/video-call-icon/video-call-icon-29.jpg',
            }}
          />
        </TouchableOpacity >

        <TouchableOpacity
          style={{flex: 1}}
          onPress={() => onShare(route.params.phone)}
          >
          <Image style = {styles.icon} 
            source={{
            uri: 'https://icon-library.com/images/facebook-share-icon-vector/facebook-share-icon-vector-18.jpg',
            }}
          />
        </TouchableOpacity >
      </View>
    </View>  
)};

const CallScreen = ({ navigation, route }) => {
  return (
    
      <ImageBackground style={{ flex: 1}} 
      blurRadius={10}
        source={{
          uri: route.params.photo,
        }}>
        <View style={{alignItems: "center", justifyContent: "center", flex: 1}}>
          <Image style={{width: 150, height: 150, borderRadius: 100}} source={{uri:route.params.photo}}/>
          <Text style={{textAlign: "center", fontSize:28, color:"white", fontWeight: "bold"}}>
           Calling {route.params.name}...
          </Text>
          <Text style={{textAlign: "center", fontSize:20, color:"white"}}>{route.params.phone}</Text>
          <TouchableOpacity 
            onPress={() =>
            navigation.navigate('Profile', {name: route.params.name, photo: route.params.photo, phone: route.params.phone})
            }>
          <Image style={{width: 50, height: 50, marginTop: 150}} source={{uri: "https://i.ya-webdesign.com/images/red-phone-icon-png-8.png"}}/>
        </TouchableOpacity>
        </View>
      </ImageBackground>
     
)};

const VideoCallScreen = ({ navigation, route }) => {
  return (
      <ImageBackground style={{ flex: 1}} 
      blurRadius={10}
        source={{
          uri: route.params.photo,
        }}>
        <View style={{alignItems: "center", justifyContent: "center", flex: 1}}>
          <Image style={{width: 150, height: 150, borderRadius: 100}} source={{uri:route.params.photo}}/>
          <Text style={{textAlign: "center", fontSize:28, color:"white", fontWeight: "bold", marginLeft: 20, marginRight: 20}}>
           Starting a video call with {route.params.name}...
          </Text>
          <Text style={{textAlign: "center", fontSize:20, color:"white"}}>{route.params.phone}</Text>
          <TouchableOpacity 
            onPress={() =>
            navigation.navigate('Profile', {name: route.params.name, photo: route.params.photo, phone: route.params.phone})
            }>
          <Image style={{width: 50, height: 50, marginTop: 150}} source={{uri: "https://i.ya-webdesign.com/images/red-phone-icon-png-8.png"}}/>
        </TouchableOpacity>
        </View>
      </ImageBackground>
     
)};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: "rgb(255, 255, 255)"
  },
  profile:{
    marginTop: 20,
    alignItems: "center",
    backgroundColor: "rgb(255, 255, 255)",
    borderRadius: 20
  },
  button: {
    height: 80,
    backgroundColor : "rgb(250, 250, 250)",
    borderRadius: 8,
    borderColor: "rgb(1,1,1)",
    margin: 1
  },
  text: {
    fontSize: 18,
    lineHeight: 21,
    fontWeight: 'bold',
    marginLeft: 20,
    marginTop: 30
  },
  picture: {
    marginTop: 15,
    marginLeft: 15,
    width: 50,
    height: 50,
    borderRadius: 100
  },
  profilePicture: {
    marginTop: 20,
    width: 150,
    height: 150,
    borderRadius: 10
  },
  profileText: {
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 20
  },
  phoneNumber: {
    fontSize: 20
  },
  icon: {
    marginTop: 15,
    marginLeft: 20,
    marginRight: 20,
    width: 30,
    height: 30,
    borderRadius: 100,
    marginBottom: 30
  },
  actionContainer: {
    marginRight: 80,
    marginLeft: 80,
    alignItems: 'center',
    flexDirection: "row",
    justifyContent: "center"
  }
});


export default Contacts;
