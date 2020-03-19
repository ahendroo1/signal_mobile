
import * as React from 'react';
import { 
  Text, 
  View, 
  StyleSheet , 
  ScrollView, 
  StatusBar, 
  TextInput, 
  Image,
  ImageBackground,

} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ListItem, Input, Button } from 'react-native-elements';
import { createStackNavigator } from '@react-navigation/stack';

const backColor = '#e2c275';
const vColor = '#eadca6';

function ProfileScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor: vColor, }}>
      <Text>Profile screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('DetailsProfile')}
        
      />
    </View>
  );
}


export default ProfileScreen
