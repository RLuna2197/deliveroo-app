import { View, Text, SafeAreaView, Image } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
    const navigation = useNavigation();
    
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);
    
  return (
    <SafeAreaView>
        <View>
          <Text className="bg-red-300">Hcxxvbbvbvola</Text>
        <Image
          source={{
            uri: "https://links.papareact.com/wru",
          }}
          className="w-7 h-7 bg-gray-300 rounded-full p-4"
        />
        </View>
    </SafeAreaView>
    

  )
}